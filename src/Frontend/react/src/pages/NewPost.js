import React, { useState } from "react";
import Progress from "../components/form-components/Progress";
import Header from "../components/containers/Header";
import {
  DadoPessoal,
  Endereco,
  Relato,
  Publish,
  Congratulations,
} from "../components/form-components/NewPostForm";
import { useForm, FormProvider } from "react-hook-form";
import {
  PageContainer,
  OverlayContainer,
  Container,
  ProgressContainer,
  Circle,
  Content,
  Btns,
  ButtonPrev,
  ButtonNext,
  ButtonPublish,
  ButtonBlog,
} from "../styles/form/NewPostStyle";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const SparkPostLink = styled(Link)`
  color: #ffd700;
  text-decoration: none;
`;

function NewPost() {
  const methods = useForm();
  const [step, setSteps] = useState(1);
  const totalSteps = 5;

  const [showErrors, setShowErrors] = useState(false);
  // Vai ser mudado apenas quando o botão 'Next' for clicado, para o valor só ser mostrado quando o botão for clicado

  function HandlePrev() {
    if (step > 1) setSteps((step) => step - 1);
  }

  const HandleNext = async () => {
    const isStepValid = await methods.trigger(); // Valida os campos
    if (isStepValid) {
      setShowErrors(false); // Resetar erro ao passar para o próximo passo
      setSteps((step) => step + 1); // Avança se válido
    } else {
      setShowErrors(true); // Exibe erros após tentativa de avançar
    }
  };

  const HandlePublish = () => {
    setSteps((step) => step + 1);
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3002/posts", data).then(() => {
      console.log("Funcionou");
    });
  };

  const onError = (errors) => {
    if (showErrors) {
      console.log("Erros de validação:", errors);
    }
    // Aqui você pode lidar com os erros, mas não deve enviar nada ao servidor
  };

  const renderSteps = () => {
    switch (step) {
      case 1:
        return <DadoPessoal showErrors={showErrors} />;
      case 2:
        return <Endereco showErrors={showErrors} />;
      case 3:
        return <Relato showErrors={showErrors} />;
      case 4:
        return <Publish />;
      case 5:
        return <Congratulations />;
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <Header />
      <OverlayContainer>
        <Container>
          <ProgressContainer
            style={{ display: step === totalSteps ? "none" : "flex" }}
          >
            <Progress totalSteps={totalSteps} step={step} />
            <Circle $active={step >= 1}>1</Circle>
            <Circle $active={step >= 2}>2</Circle>
            <Circle $active={step >= 3}>3</Circle>
            <Circle $active={step >= 4}>4</Circle>
          </ProgressContainer>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
              <Content>{renderSteps()}</Content>
              <Btns>
                <ButtonPrev
                  disabled={step <= 1}
                  style={{ display: step === totalSteps ? "none" : "flex" }}
                  onClick={HandlePrev}
                  type="button"
                >
                  <ChevronLeft />
                  Prev
                </ButtonPrev>
                <ButtonNext
                  style={{ display: step >= 4 ? "none" : "flex" }}
                  onClick={HandleNext}
                  type="button"
                >
                  Next
                  <ChevronRight />
                </ButtonNext>
                <ButtonPublish
                  style={{ display: step === 4 ? "flex" : "none" }}
                  onClick={HandlePublish}
                  type="submit"
                >
                  Publish <Send />
                </ButtonPublish>
                <ButtonBlog
                  style={{ display: step === totalSteps ? "flex" : "none" }}
                  type="button"
                >
                  <SparkPostLink to="/SparkPost">SparkPost</SparkPostLink>
                </ButtonBlog>
              </Btns>
            </form>
          </FormProvider>
        </Container>
      </OverlayContainer>
    </PageContainer>
  );
}

export default NewPost;
