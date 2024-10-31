import React from "react";
import styled from "styled-components";
import { BookOpenText, MessagesSquare, Handshake } from "lucide-react";
import { ButtonContainer, ButtonH2, Button } from "../../styles/AboutStyle";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100vh;
  padding-top: 5rem;
`;

const ServiceContainer = styled.div`
  text-align: center;
  margin: auto;
  justify-content: space-between;
  margin-top: 30px;
  gap: 1rem;
  display: flex;
  flex-direction: row;
`;

const ServicesCard = styled.div`
  width: 350px;
  border-radius: 8px;
  color: #000;
  border: 0.5px solid #000;
  padding: 20px;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  background-color: yellow;

  transition: 0.5s ease;
  &:hover {
    transform: translateY(-20px);
  }
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  font-family: "Expletus Sans", sans-serif;
  background-image: linear-gradient(
    to right,
    #ffff00,
    #32cd32
  ); // -> amarelo com cinza
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

function Sevices() {
  return (
    <Container id="services">
      <H2>Nossos Serviços</H2>
      <ServiceContainer>
        <ServicesCard>
          <BookOpenText size={50} />
          <h2>Portal de Conhecimento: Tudo sobre Energia Limpa e o ODS 7</h2>
          <p>
            Este portal oferece uma visão abrangente sobre o ODS 7, que busca
            garantir acesso universal à energia limpa e sustentável. Aqui, você
            entenderá a importância desse objetivo para promover um futuro mais
            saudável e combater as mudanças climáticas, fundamentais para todos.
          </p>
        </ServicesCard>
        <ServicesCard>
          <MessagesSquare size={48} />
          <h2>SparkPost</h2>
          <p>
            Através de fóruns e discussões, nosso portal conecta pessoas em
            torno do ODS 7, promovendo a troca de conhecimentos e experiências.
            Juntos, podemos formar uma comunidade ativa e engajada na busca por
            soluções energéticas responsáveis e inovadoras.
          </p>
        </ServicesCard>
        <ServicesCard>
          <Handshake size={48} />
          <h2>Muito Além de Nós</h2>
          <p>
            Desenvolvemos soluções de software personalizadas para atender suas
            necessidades.
          </p>
        </ServicesCard>
      </ServiceContainer>
      <ButtonContainer>
        <ButtonH2>
          Sua colaboração é o que vai fazer o futuro acontecer!
        </ButtonH2>

        <Button to="/SignUp">
          <span>Junte-se a nós!</span>
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Sevices;
