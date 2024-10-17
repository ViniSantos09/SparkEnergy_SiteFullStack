import styled from "styled-components";

const WhatIs = styled.div`
  // ...
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-family: "Expletus Sans", sans-serif;
  color: #ab47bc;
`;

const H3 = styled.h3`
  color: #fec5fb;
  font-size: 1.7rem;
  font-family: "Poppins", sans-serif;
`;

const P2 = styled.p`
  color: #d1c4e9;
  font-size: 1.25rem;
  font-family: "Manjari", sans-serif;
`;

function WhatIsSparkConnect() {
  return (
    <WhatIs>
      <SubTitle>{`{ O que é a SparkConnect? }`}</SubTitle>

      <H3>Objetivo</H3>
      <P2>
        O objetivo da SparkConnect é promover o acesso universal, confiável e
        acessível à energia para todos. Buscamos ouvir a comunidade sobre as
        dificuldades enfrentadas no acesso à energia em seus bairros e como isso
        impacta o seu dia a dia. Ao coletar essas informações, nosso intuito é
        gerar relatórios que possam ser usados por ONGs e organizações dedicadas
        à transformação do cenário energético. Acreditamos que cada voz é
        importante para alcançar o Objetivo 7.1 da ODS 7 da ONU: "Garantir o
        acesso universal, confiável, moderno e a preços acessíveis a serviços de
        energia."
      </P2>
      <hr />

      <H3>Conexão</H3>
      <P2>
        Na SparkConnect, a conexão vai além da internet. Queremos conectar
        pessoas, ideias e soluções para problemas reais de acesso à energia. Por
        meio deste espaço, incentivamos a troca de experiências, denúncias e
        sugestões, criando uma rede de apoio entre os moradores de diferentes
        bairros. Cada publicação ajudará a pintar um retrato mais fiel da
        realidade energética das comunidades, ajudando na criação de soluções
        que beneficiem todos de forma mais justa e sustentável.
      </P2>

      <hr />

      <H3>Cooperação</H3>
      <P2>
        A cooperatividade é a chave para um futuro mais sustentável. Ao
        compartilhar informações sobre a situação energética de sua comunidade,
        você se torna parte de uma grande rede colaborativa. A SparkConnect é um
        espaço onde todos têm a oportunidade de colaborar, sugerir melhorias e
        denunciar problemas, ajudando uns aos outros a encontrar soluções para
        um acesso mais acessível e justo à energia. Juntos, podemos superar os
        desafios e garantir que mais pessoas tenham acesso a serviços de energia
        de qualidade.
      </P2>

      <hr />

      <H3>Solidariedade</H3>
      <P2>
        A solidariedade é o que impulsiona a SparkConnect. Estamos criando um
        espaço onde as pessoas podem se apoiar mutuamente, dividindo
        experiências e ajudando a melhorar a situação de quem mais precisa. Ao
        compartilhar sua opinião, denúncia ou sugestão, você não está apenas
        contribuindo para sua comunidade, mas também para um movimento global
        que busca garantir acesso à energia limpa, sustentável e acessível para
        todos. A solidariedade é o que nos torna mais fortes, e, juntos, podemos
        alcançar um futuro mais justo para todos.
      </P2>
    </WhatIs>
  );
}

export default WhatIsSparkConnect;
