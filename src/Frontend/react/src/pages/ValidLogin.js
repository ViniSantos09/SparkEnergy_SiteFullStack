import React from "react";
import { CircleCheckBig } from "lucide-react";
import styled from "styled-components";
import Header from "../components/containers/Header";
import { Link } from "react-router-dom";

const PageContainer = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const ContentContainer = styled.div`
  background-color: #ffd700;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 550px;
  height: 50%;
  color: black;
  padding: 2rem 2rem;
  border-radius: 5px;
  overflow-x: hidden;
  margin: 0 auto;
  text-align: center;
  font-family: "Poppins", sans-serif;

  @media (max-width: 950px) {
    margin: 20rem 0;
  }
`;

const TitleContainer = styled.div`
  font-size: 1.2rem;
`;

const P = styled.p`
  font-size: 1rem;
`;

const Btns = styled.div`
  display: flex;
  width: 100%;
  & > * + * {
    margin-left: 1rem;
  }
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 4px;
  background-color: #000;
  color: #ffd700;
  padding: 7px 40px;
  width: 50%;

  &:active {
    transform: scale(0.98);
  }
`;

function ValidLogin() {
  return (
    <PageContainer>
      <Header />
      <Container>
        <ContentContainer>
          <TitleContainer>
            <CircleCheckBig size={50} color="#000" />
            <h1>Login Bem-Sucedido!</h1>
          </TitleContainer>

          <P>
            Agradecemos por fazer login. Estamos felizes em tê-lo conosco
            novamente. Explore as novidades e aproveite sua experiência!
          </P>
          <Btns>
            <Button to="/">Home</Button>
            <Button to="/SparkPost">SparkPost</Button>
          </Btns>
        </ContentContainer>
      </Container>
    </PageContainer>
  );
}

export default ValidLogin;
