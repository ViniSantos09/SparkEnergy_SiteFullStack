//* Slider.js

/* ------ os comentados sao os que eu vou alterar eu Msm nn se preocupe ----- */
//*import React, { useEffect } from "react";
import styled from "styled-components";
//*import gsap from "gsap";
//*import ScrollTrigger from "gsap/ScrollTrigger";
import EnergyBox from "./EnergyBox";
import NavButton from "./navbutton";
//! minhas img
import solarCell from "../../assets/images/typesenergy_img/solar-cell.png";
import waterEnergy from "../../assets/images/typesenergy_img/water-energy.png";
import nuclearPlant from "../../assets/images/typesenergy_img/nuclear-plant.png";
import windmill from "../../assets/images/typesenergy_img/windmill.png";
import waves from "../../assets/images/typesenergy_img/waves_697809.png";
import geotermic from "../../assets/images/typesenergy_img/geotermic.png";
import biomass from "../../assets/images/typesenergy_img/biomass.png";


//*gsap.registerPlugin(ScrollTrigger);

const SlideHorizontal = styled.section`
  display: flex;
  gap: 10px;
  padding: 15px;
  overflow: hidden;
  position: relative;
`;

const ContainerSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #010201;
  position: relative;
`;

const Slider = () => {
  /*
  
  useEffect(() => {
    const sections = gsap.utils.toArray(".box-energy");
    if (sections.length > 0) {
      gsap.to(sections, {
        xPercent: -100 * (sections.length -1),
        ease: "none",
        scrollTrigger: {
          trigger: "#container-slider",
          pin: true,
          scrub: 0.1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector("#container-slider").offsetWidth,
        },
      });
    }
  }, []);*/

  return (
    <ContainerSlider id="container-slider">
      <NavButton direction="up" />
      <SlideHorizontal>
        <EnergyBox
          imgSrc={solarCell}
          title="Solar"
          description="A energia solar fotovoltaica é a energia obtida através da conversão direta da luz em eletricidade."
          link="pags-energia/pagraelEnergiasolar.html"
        />
        <EnergyBox
          imgSrc={waterEnergy}
          title="Hidrelétrica"
          description="A energia hidráulica ou energia hídrica é a energia obtida a partir da energia potencial de uma massa de água."
          link="energias/energiahidreletrica.html"
        />
        <EnergyBox
          imgSrc={nuclearPlant}
          title="Nuclear"
          description="Energia nuclear ou energia atômica é a energia liberada em uma reação nuclear."
          link="energias/energianuclear.html"
        />
        <EnergyBox
          imgSrc={windmill}
          title="Eolica"
          description="Energia eólica é a transformação da energia do vento em energia útil."
          link="energias/energiaeolica.html"
        />
        <EnergyBox
          imgSrc={waves}
          title="Maremotriz"
          description="Energia maremotriz, ou energia das marés, é o modo de geração de energia por meio do movimento das marés."
          link="energias/energiamaremotriz.html"
        />
        <EnergyBox
          imgSrc={geotermic}
          title="Geotermica"
          description="Energia geotérmica, ou energia geotermal, é a energia obtida a partir do calor proveniente do interior da Terra."
          link="energias/energiageotermica.html"
        />
        <EnergyBox
          imgSrc={biomass}
          title="Biomassa"
          description="Biomassa é toda matéria orgânica de origem vegetal ou animal usada com a finalidade de produzir energia."
          link="energias/energiabiomassa.html"
        />
      </SlideHorizontal>
      <NavButton direction="down" />
    </ContainerSlider>
  );
};

export default Slider;
