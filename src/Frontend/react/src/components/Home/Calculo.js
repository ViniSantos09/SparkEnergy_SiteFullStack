import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useRef, useEffect } from "react";

const Camp = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  margin-right: 1rem;
  width: 250px;
`;

const CalcContainer = styled.div`
  height: 100vh;
  padding: 40rem 2rem;
  display: flex;
  align-items: center;
`;

function Calculo() {
  const CampPmaxARef = useRef(null);
  const CampVcRef = useRef(null);
  const CampVPmaxRef = useRef(null);
  const CampKRef = useRef(null);
  const CampPmaxRef = useRef(null);
  const AvaliarRef = useRef(null);

  var maxSolar;
  var minSolar;
  var maxWind;
  var minWind;

  var solarData;
  var windData;

  useEffect(() => {
    const CampPmaxA = CampPmaxARef.current;
    const CampVc = CampVcRef.current;
    const CampVPmax = CampVPmaxRef.current;
    const CampK = CampKRef.current;
    const CampPmax = CampPmaxRef.current;
    // const Avaliar = AvaliarRef.current;

    CampPmaxA.value = 50;
    CampVc.value = 4;
    CampVPmax.value = 12;
    CampK.value = 0.92;
    CampPmax.value = 50;

    // const solarPower = (t) => CampPmax.value * Math.sin((Math.PI * t) / 12);

    // const windPower = (v) => {
    //     if (v < 4) return 0; // Abaixo da velocidade mínima
    //     if (v < CampVPmax.value) return (v - CampVc.value) * CampPmaxA.value/10; // Cálculo simplificado para potência
    //     return CampPmaxA.value; // Potência máxima
    // };

    // const calculateSolarData = () => {
    //     const data = [];
    //     for (let t = 0; t <= 24; t++) {
    //         const power = solarPower(t);
    //         data.push({ time: t, power });
    //     }
    //     return data;
    // };

    // const calculateWindData = () => {
    //     const data = [];
    //     for (let v = 0; v <= 20; v++) {
    //         const power = windPower(v);
    //         data.push({ windSpeed: v, power });
    //     }
    //     return data;
    // };

    // solarData = calculateSolarData();
    // windData = calculateWindData();
    // maxSolar = Math.max(...solarData.map(d => d.power));
    // minSolar = Math.min(...solarData.map(d => d.power));
    // maxWind = Math.max(...windData.map(d => d.power));
    // minWind = Math.min(...windData.map(d => d.power));

    // Avaliar.addEventListener("click", () => {

    // })
  });

  const solarPower = (t) => 50 * Math.sin((Math.PI * t) / 12);

  const windPower = (v) => {
    if (v < 4) return 0; // Abaixo da velocidade mínima
    if (v < 12) return ((v - 4) * 250) / 10; // Cálculo simplificado para potência
    return 250; // Potência máxima
  };

  const calculateSolarData = () => {
    const data = [];
    for (let t = 0; t <= 24; t++) {
      const power = solarPower(t);
      data.push({ time: t, power });
    }
    return data;
  };

  const calculateWindData = () => {
    const data = [];
    for (let v = 0; v <= 20; v++) {
      const power = windPower(v);
      data.push({ windSpeed: v, power });
    }
    return data;
  };

  solarData = calculateSolarData();
  windData = calculateWindData();
  maxSolar = Math.max(...solarData.map((d) => d.power));
  minSolar = Math.min(...solarData.map((d) => d.power));
  maxWind = Math.max(...windData.map((d) => d.power));
  minWind = Math.min(...windData.map((d) => d.power));

  return (
    <CalcContainer>
      <div>
        <h3>Placa Solar</h3>
        <Camp
          ref={CampPmaxRef}
          type="Number"
          placeholder="Potência da Placa (W)"
        />

        <h3>Aerogerador</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Potência do Aerogerador (W)</p>
          <Camp
            ref={CampPmaxARef}
            type="Number"
            placeholder="Potência do Aerogerador (W)"
          />
          <p>Velocidade de Corte (m/s)</p>
          <Camp
            ref={CampVcRef}
            type="Number"
            placeholder="Velocidade de Corte (m/s)"
          />
          <p>Velocidade para Potência Nominal (m/s)</p>
          <Camp
            ref={CampVPmaxRef}
            type="Number"
            placeholder="Velocidade para Potência Nominal (m/s)"
          />
          <p>Constante k da turbina</p>
          <Camp
            ref={CampKRef}
            type="Number"
            placeholder="Constante k da turbina"
          />
        </div>
        <p>Consulte essas informações no rótulo do aparelho.</p>

        <button ref={AvaliarRef}>Avaliar</button>
      </div>

      <div
        style={{ width: "1850px", display: "flex", flexDirection: "column" }}
      >
        <h1>Produção de Energia Solar</h1>
        <h2>
          Máximo: {maxSolar}, Mínimo: {minSolar}
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={solarData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              label={{ value: "Hora do Dia", position: "top" }}
            />
            <YAxis
              label={{
                value: "Energia (kWh)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="power" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <h1>Produção de Energia Eólica</h1>
        <h2>
          Máximo: {maxWind}, Mínimo: {minWind}
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={windData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="windSpeed"
              label={{ value: "Velocidade do Vento (m/s)", position: "top" }}
            />
            <YAxis
              label={{
                value: "Energia (kWh)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="power" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CalcContainer>
  );
}

export default Calculo;
