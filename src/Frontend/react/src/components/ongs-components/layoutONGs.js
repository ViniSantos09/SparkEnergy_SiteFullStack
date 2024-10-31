import styled from "styled-components";
import { useRef } from "react";
import SetaImg from "../../assets/images/ONGs_image/Seta.png";
import GambaBg from "../../assets/images/ONGs_image/Gamba.jpg";
import AmigosBemBg from "../../assets/images/ONGs_image/AmigosBem.jpg";
import casa12voltsBg from "../../assets/images/ONGs_image/casa12volts-desenho.jpg";
import DomPixoteBg from "../../assets/images/ONGs_image/DomPixote.jpg";
import EcologicaBg from "../../assets/images/ONGs_image/Ecologica.jpg";
import GreenpeaceBg from "../../assets/images/ONGs_image/Greenpeace.jpg";
import IEMABg from "../../assets/images/ONGs_image/IEMA.jpg";
import LitroBg from "../../assets/images/ONGs_image/Litro.jpg";
import PerifaBg from "../../assets/images/ONGs_image/Perifa.jpg";
import revolusolarBg from "../../assets/images/ONGs_image/revolusolar.jpg";
import SociedadeSolBg from "../../assets/images/ONGs_image/SociedadeSol.jpg";
import WWFBg from "../../assets/images/ONGs_image/WWF.jpg";

const BOX1 = styled.div`
  background-size: cover;
  background-position: center;
  position: center;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 20px;
  border-color: yellow;
  border-style: solid;
  margin: 20px;

  padding: 20px;
  text-shadow: 2px 2px 5px black;

  width: 40%;
  height: 100%;

  background-image: url(${GambaBg});

  text-align: justify;
  transition: background-image 2s;
`;

const BOX2 = styled.div`
  background-size: cover;
  background-position: center;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 20px;
  border-color: yellow;
  border-style: solid;
  margin: 20px;

  padding: 20px;
  text-shadow: 2px 2px 5px black;

  width: 40%;
  height: 100%;

  background-image: url(${GreenpeaceBg});

  text-align: justify;
  transition: background-image 2s;
`;

const BOX3 = styled.div`
  background-size: cover;
  background-position: center;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 20px;
  border-color: yellow;
  border-style: solid;
  margin: 20px;

  padding: 20px;
  text-shadow: 2px 2px 5px black;

  width: 40%;
  height: 100%;

  background-image: url(${DomPixoteBg});

  text-align: justify;
  transition: background-image 2s;
`;

const BOX4 = styled.div`
  background-size: cover;
  background-position: center;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 20px;
  border-color: yellow;
  border-style: solid;
  margin: 20px;

  padding: 20px;
  text-shadow: 2px 2px 5px black;

  width: 40%;
  height: 100%;

  background-image: url(${EcologicaBg});

  text-align: justify;
  transition: background-image 2s;
`;

const BOXA = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;

  @media screen and (max-width: 1124px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const BOXB = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;

  @media screen and (max-width: 1124px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// const ONG = styled.div`
//     background-size: cover;
//     background-position: center;
//     font-family: Arial, Helvetica, sans-serif;
//     border-radius: 20px;
//     border-color: yellow;
//     border-style:solid;
//     margin: 20px;

//     padding: 20px;
//     text-shadow: 2px 2px 5px black;

//     width: 40%;
//     height: 100%;

//     text-align: justify;
//     transition: background-image 2s;

//     @media screen and (max-width: 1124px) {
//         min-width: 100%;
//     }
// `

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  font-weight: bold;
  background-color: #ffe100;
  color: #000;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Next = styled.button`
  background-color: rgba(139, 139, 233, 0);
  color: white;

  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${SetaImg});

  border-style: none;
  background-size: 100%;

  margin: auto;

  height: 60px;
  width: 60px;

  &:hover {
    cursor: pointer;
  }
`;

const Back = styled.button`
  background-color: rgba(139, 139, 233, 0);
  color: white;

  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${SetaImg});

  border-style: none;
  background-size: 100%;

  margin: auto;
  transform: rotateZ(180deg);

  height: 60px;
  width: 60px;

  &:hover {
    cursor: pointer;
  }
`;

const Sombra = styled.div`
  background-color: rgba(22, 22, 22, 0.6);
  padding: 10px;
  border-radius: 20px;
`;

function LayoutONG() {
  // const box1 = document.querySelector(".BOX1"),
  // box2 = document.querySelector(".BOX2"),
  // box3 = document.querySelector(".BOX3"),
  // box4 = document.querySelector(".BOX4"),

  // Back = document.querySelector(".Back"),
  // Next = document.querySelector(".Next")

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  const refBack = useRef(null);
  const refNext = useRef(null);

  //================================================

  var currentIndexBox1 = 0,
    currentIndexBox2 = 0,
    currentIndexBox3 = 0,
    currentIndexBox4 = 0;

  function BackVoltar() {
    currentIndexBox1--;
    currentIndexBox2--;
    currentIndexBox3--;
    currentIndexBox4--;

    AlternaBOX1();
    AlternaBOX2();
    AlternaBOX3();
    AlternaBOX4();
  }

  function NextAvancar() {
    currentIndexBox1++;
    currentIndexBox2++;
    currentIndexBox3++;
    currentIndexBox4++;

    AlternaBOX1();
    AlternaBOX2();
    AlternaBOX3();
    AlternaBOX4();
  }

  function AlternaBOX1(value) {
    if (currentIndexBox1 > 2) {
      currentIndexBox1 = 0;
    }
    if (currentIndexBox1 < 0) {
      currentIndexBox1 = 2;
    }

    const box1 = box1Ref.current;

    if (box1) {
      if (currentIndexBox1 === 0) {
        box1.querySelector("h2").textContent = "Instituto Perifa Sustentável";
        box1.querySelector("p").textContent =
          "Ativista do Instituto Perifa Sustentável dá espaço à instalação de painéis solares no meio de comunidade.";
        box1.style.backgroundImage = `url(${PerifaBg})`;
        box1.querySelector("a").href =
          "https://ciclovivo.com.br/planeta/energia/periferia-sustentavel-inaugura-a-1a-micro-geradora-de-energia-solar-da-quebrada/#:~:text=A%201%C2%AA%20Micro%20Geradora%20de%20Energia%20Solar%20da,de%20autonomia%20em%20energia%20limpa%20e%20totalmente%20sustent%C3%A1vel.";
      } else if (currentIndexBox1 === 1) {
        box1.querySelector("h2").textContent = "Gambá";
        box1.querySelector("p").textContent =
          "A Organização Gambá distribuiu balas doces na rua como forma de provocação à reflexão sobre energia nuclear na Bahia.";

        box1.style.backgroundImage = `url(${GambaBg})`;
        box1.querySelector("a").href =
          "https://www.gamba.org.br/noticias/gamba-provoca-baianos-e-turistas-a-refletirem-sobre-o-nuclear-na-bahia";
      } else {
        box1.querySelector("h2").textContent = "IEMA";
        box1.querySelector("p").textContent =
          "IEMA empreita a instalação de 70 sistemas fotovoltaicos em 65 comunidades do Território Indígena Xingu, na porção Sul da Amazônia brasileira.";
        box1.style.backgroundImage = `url(${IEMABg})`;
        box1.querySelector("a").href =
          "https://energiaeambiente.org.br/produto/avaliacao-de-impacto-socioambiental-da-introducao-de-sistemas-fotovoltaicos-no-territorio-indigena-do-xingu";
      }
    }
  }

  function AlternaBOX2(value) {
    if (currentIndexBox2 > 2) {
      currentIndexBox2 = 0;
    }
    if (currentIndexBox2 < 0) {
      currentIndexBox2 = 2;
    }

    const box2 = box2Ref.current;
    if (box2) {
      if (currentIndexBox2 === 0) {
        box2.querySelector("h2").textContent = "Revolusolar";
        box2.querySelector("p").textContent =
          "Projeto da Revolusolar abastace Museu da Maré com energia solar.";
        box2.style.backgroundImage = `url(${revolusolarBg})`;
        box2.querySelector("a").href = "https://revolusolar.org.br/projetos/";
      } else if (currentIndexBox2 === 1) {
        box2.querySelector("h2").textContent = "Greenpeace";
        box2.querySelector("p").textContent =
          "Greenpeace protesta em plataforma petrolífera da Shell e recebe protesto de US$ 8,6 milhões.";
        box2.style.backgroundImage = `url(${GreenpeaceBg})`;
        box2.querySelector("a").href =
          "https://www.greenpeace.org/brasil/blog/greenpeace-sofre-processo-de-intimidacao-de-shell/";
      } else {
        box2.querySelector("h2").textContent = "Litro de Luz";
        box2.querySelector("p").textContent =
          "Investimento em energia solar beneficia 62 famílias de nordestinos na região da Morada do Catimbau.";
        box2.style.backgroundImage = `url(${LitroBg})`;
        box2.querySelector("a").href =
          "https://www.litrodeluz.com/#:~:text=O%20Litro%20de%20Luz%20utiliza%20materiais%20simples%20para%20tornar%20a";
      }
    }
  }

  function AlternaBOX3(value) {
    if (currentIndexBox3 > 2) {
      currentIndexBox3 = 0;
    }
    if (currentIndexBox3 < 0) {
      currentIndexBox3 = 2;
    }

    const box3 = box3Ref.current;
    if (box3) {
      if (currentIndexBox3 === 0) {
        box3.querySelector("h2").textContent = "Sociedade do Sol";
        box3.querySelector("p").textContent =
          "Sociedade do Sol insiste em investir esforços em sua proposta de Aquecedor Solar de Baixo Custo e na implementação de painéis fotovoltaicos.";
        box3.style.backgroundImage = `url(${SociedadeSolBg})`;
        box3.querySelector("a").href =
          "https://www.sociedadedosol.org.br/fotovoltaico";
      } else if (currentIndexBox3 === 1) {
        box3.querySelector("h2").textContent = "Instituto Dom Pixote";
        box3.querySelector("p").textContent =
          "O Instituto Dom Pixote intenta pioneiramente a instalação do biogestor israelense HomeBiogas® no Brasil.";
        box3.style.backgroundImage = `url(${DomPixoteBg})`;
        box3.querySelector("a").href =
          "https://www.dompixote.org/noticias/conheca-a-homebiogas-e-o-projeto-rio-sustentavel/";
      } else {
        box3.querySelector("h2").textContent = "ONG Verde";
        box3.querySelector("p").textContent =
          "A ONG Verde prepara uma maquete real de seu projeto CASA12Volts que consiste em uma casa 100% alimentada com energia renovável.";
        box3.style.backgroundImage = `url(${casa12voltsBg})`;
        box3.querySelector("a").href =
          "https://ongverde.org/projeto-casa12volts.html/";
      }
    }
  }

  function AlternaBOX4(value) {
    if (currentIndexBox4 > 2) {
      currentIndexBox4 = 0;
    }
    if (currentIndexBox4 < 0) {
      currentIndexBox4 = 2;
    }

    const box4 = box4Ref.current;
    if (box4) {
      if (currentIndexBox4 === 0) {
        box4.querySelector("h2").textContent = "WWF-Brasil";
        box4.querySelector("p").textContent =
          "O projeto RESEX Solar gerou acesso a energia elétrica limpa para comunidades ribeirinhas da Amazonia Legal.";
        box4.style.backgroundImage = `url(${WWFBg})`;
        box4.querySelector("a").href =
          "https://panda.maps.arcgis.com/apps/Cascade/index.html?appid=9dc42b217722439495f5ae5d277a3a2b&_gl=1*90yjwl*_ga*MTQxMzY0MTg0MS4xNzI0ODc3MTUz*_ga_KSP2KDVW5X*MTcyNTE0MDkxMC40LjEuMTcyNTE0MTAzNi42MC4wLjA.";
      } else if (currentIndexBox4 === 1) {
        box4.querySelector("h2").textContent = "Instituto Ecológica";
        box4.querySelector("p").textContent =
          "Instituto Ecológica empreita a inauguração de uma usina bioenergética de álcool e ração animal.";
        box4.style.backgroundImage = `url(${EcologicaBg})`;
        box4.querySelector("a").href =
          "https://www.ecologica.org.br/bioenergia/";
      } else {
        box4.querySelector("h2").textContent = "Amigos do Bem";
        box4.querySelector("p").textContent =
          "Investimento em energia solar beneficia 62 famílias na região da Morada do Catimbau, no nordeste brasileiro.";
        box4.style.backgroundImage = `url(${AmigosBemBg})`;
        box4.querySelector("a").href =
          "https://www.amigosdobem.org/investimento-em-energia-solar-beneficia-5-mil-nordestinos-reduz-emissao-de-gas-e-preserva-mais-de-30-mil-arvores/#:~:text=Apenas%20no%20Vale%20do%20Catimbau,%20200%20placas%20solares%20geram%20energia";
      }
    }
  }

  return (
    <div className="layout-ONGs">
      <h1
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          textAlign: "center",
          color: "yellow",
        }}
      >
        ONGs dedicadas às Energias Renováveis
      </h1>
      <div
        className="layout-ONGs-AUX"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Back className="Back" ref={refBack} onClick={BackVoltar}></Back>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <BOXA className="boxA">
            <BOX1 className="ONG BOX1" ref={box1Ref} style={{ color: "white" }}>
              <Sombra>
                <h2>Gambá</h2>
                <p id="BOX1-p">
                  A Organização Gambá distribuiu balas doces na rua como forma
                  de provocação à reflexão sobre energia nuclear na Bahia.
                </p>
                <a
                  target="_blank"
                  href="https://www.gamba.org.br/noticias/gamba-provoca-baianos-e-turistas-a-refletirem-sobre-o-nuclear-na-bahia"
                  rel="noreferrer noopener"
                >
                  <Button id="BOX1-button">Confira!</Button>
                </a>
              </Sombra>
            </BOX1>

            <BOX2 className="ONG BOX2" ref={box2Ref} style={{ color: "white" }}>
              <Sombra>
                <h2>Greenpeace</h2>
                <p>
                  Greenpeace protesta em plataforma petrolífera da Shell e
                  recebe protesto de US$ 8,6 milhões.
                </p>
                <a
                  target="_blank"
                  href="https://www.greenpeace.org/brasil/blog/greenpeace-sofre-processo-de-intimidacao-de-shell/"
                  rel="noreferrer noopener"
                >
                  <Button>Confira!</Button>
                </a>
              </Sombra>
            </BOX2>
          </BOXA>

          <BOXB className="boxB">
            <BOX3 className="ONG BOX3" ref={box3Ref} style={{ color: "white" }}>
              <Sombra>
                <h2>Instituto Dom Pixote</h2>
                <p>
                  O Instituto Dom Pixote intenta pioneiramente a instalação do
                  biogestor israelense HomeBiogas® no Brasil.
                </p>
                <a
                  target="_blank"
                  href="https://www.dompixote.org/noticias/conheca-a-homebiogas-e-o-projeto-rio-sustentavel/"
                  rel="noreferrer noopener"
                >
                  <Button>Confira!</Button>
                </a>
              </Sombra>
            </BOX3>

            <BOX4 className="ONG BOX4" ref={box4Ref} style={{ color: "white" }}>
              <Sombra>
                <h2>Instituto Ecológica</h2>
                <p>
                  Instituto Ecológica empreita a inauguração de uma usina
                  bioenergética de álcool e ração animal.
                </p>
                <a
                  target="_blank"
                  href="https://www.ecologica.org.br/bioenergia/"
                  rel="noreferrer noopener"
                >
                  <Button>Confira!</Button>
                </a>
              </Sombra>
            </BOX4>
          </BOXB>
        </div>
        <div>
          <Next className="Next" ref={refNext} onClick={NextAvancar}></Next>
        </div>
      </div>
    </div>
  );
}

export default LayoutONG;
