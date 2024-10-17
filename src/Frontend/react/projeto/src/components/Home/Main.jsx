import styled from "styled-components";
import About from "../main-components/About";
import Services from "../main-components/Services";
import TypesEnergy from "../main-components/TypesEnergy";
import Ongs from "../main-components/Ongs";

const MainContainer = styled.main``;

function Main() {
  return (
    <main>
      <MainContainer>
        <About />
        <Services />
        <TypesEnergy />
        <Ongs />
      </MainContainer>
    </main>
  );
}

export default Main;
