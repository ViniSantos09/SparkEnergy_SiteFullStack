import styled from "styled-components";
import WhatIsSparkConnect from "./WhatIsForm";

const IntroductionContainer = styled.div`
  /* border: 0.5px solid yellow; */
  padding-top: 6rem;

  & > * + * {
    margin-top: 10rem;
  }
`;

const Introduction = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 70px;
  font-family: "Expletus Sans", sans-serif;
`;

const Title = styled.h1`
  font-size: 8rem;
  background-image: linear-gradient(
    to right,
    #ffd700,
    #b39800,
    #7408c2,
    #330057
  );

  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

const P = styled.p`
  font-size: 2.25rem;
  /* color: #d1c4e9; // Lavanda */
  color: #919191; // Cinza-escuro
  font-family: "Manjari", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

function IntroductionSparkConnect() {
  return (
    <IntroductionContainer>
      <Introduction>
        <Title>SparkConnect</Title>
        <P>
          Bem-vindo ao SparkConnect! Agradecemos por sua visita e por se unir a
          nós na busca por soluções energéticas mais sustentáveis e acessíveis
          para todos. Aqui, você tem a oportunidade de compartilhar seus
          feedbacks, denúncias e sugestões sobre a qualidade e o acesso à
          energia em sua comunidade. Suas contribuições são fundamentais para
          gerarmos relatórios que ajudarão ONGs a desenvolver projetos que
          promovam energia limpa, acessível e confiável. Juntos, podemos
          impulsionar um futuro onde todos tenham acesso a energia para todos!
        </P>
      </Introduction>
      <WhatIsSparkConnect />
    </IntroductionContainer>
  );
}

export default IntroductionSparkConnect;
