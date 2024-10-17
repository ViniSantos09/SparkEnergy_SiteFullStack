import styled from "styled-components";
import Header from "../components/containers/Header";
import Footer from "../components/containers/Footer";
import Main from "../components/Home/Main";
import SectionHeader from "../components/header-components/SectionHeader";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <HomeContainer>
      <Header />
      <SectionHeader />
      <Main />
      <Footer />
    </HomeContainer>
  );
}

export default Home;
