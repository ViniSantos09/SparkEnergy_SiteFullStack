import styled from "styled-components";
import Header from "../components/containers/Header";
import SectionHeader from "../components/header-components/SectionHeader";
import Footer from "../components/containers/Footer";

import About from "../components/Home/About";
import Services from "../components/Home/Services";
import TypesEnergy from "../components/Home/TypesEnergy";
import Ongs from "../components/Home/Ongs";
import Calculo from "../components/Home/Calculo";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainContainer = styled.div``;

const ContainerDivisor = styled.div`
  & > * + * {
    margin-top: 30vh;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Header />
      <SectionHeader />
      <main>
        <MainContainer>
          <ContainerDivisor>
            <About />
            <Services />
          </ContainerDivisor>
          <TypesEnergy />
          <Ongs />
          <Calculo />
        </MainContainer>
      </main>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
