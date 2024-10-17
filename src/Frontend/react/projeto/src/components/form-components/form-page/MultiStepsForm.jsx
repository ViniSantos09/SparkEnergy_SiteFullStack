import styled from "styled-components";
import React, { useState } from "react";
import Progress from "./Progress";
import Header from "../../containers/Header";
import { Cadastro, DadoPessoal, Endereco, Relato } from "./Form";

const PageContainer = styled.div`
  //...
  background-color: #0b0b0b;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const OverlayContainer = styled.div`
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", sans-serif;
`;

const Container = styled.div`
  width: 550px;
  background-color: #fff;
  color: black;
  padding: 1rem 2rem;
  border-radius: 5px;
  overflow-x: hidden;
  border: 0.5px solid red;
  margin: 0 auto;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-color: #00000038;
    height: 4px;
    width: 100%;
    top: 50%;
    left: 0;
    z-index: 1;
    transform: translateY(-50%);
  }
`;

const Circle = styled.div`
  // ...
  background-color: #d9d9d9;
  color: black;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 1;

  ${(props) =>
    props.active &&
    `
    border-color: var(--line-border-empty);
    color: #ffd700;
    background-color: #630cf1;
  `}
`;

const Content = styled.div`
  h2 {
    font-size: 2rem;
    color: var(--line-border-empty);
    font-weight: 700;
    font-style: normal;
    text-align: center;
    padding: 2rem 0;
    color: #383838;
  }
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

const ButtonPrev = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 4px;
  background-color: #630cf1;
  color: #ffd700;
  padding: 5px 40px;

  &:active {
    outline: none;
    transform: scale(0.98);
  }

  ${(props) =>
    props.disabled &&
    `
      outline: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      border-radius: 4px;
      color: #000000a6;
      padding: 4px 40px;
      background-color: #d9d9d9;
      cursor: not-allowed;
  `}
`;

const ButtonNext = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 4px;
  background-color: #630cf1;
  color: #ffd700;
  padding: 5px 40px;

  &:active {
    outline: none;
    transform: scale(0.98);
  }

  ${(props) =>
    props.disabled &&
    `
      outline: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      border-radius: 4px;
      color: #000000a6;
      padding: 4px 40px;
      background-color: #d9d9d9;
      cursor: not-allowed;
  `}
`;

function OverlayForm() {
  const [step, setSteps] = useState(1);
  const totalSteps = 4;

  function HandlePrev() {
    if (step > 1) setSteps((step) => step - 1);
  }

  function HandleNext() {
    if (step < 4) setSteps((step) => step + 1);
  }

  const renderSteps = () => {
    switch (step) {
      case 1:
        return <DadoPessoal />;
      case 2:
        return <Cadastro />;
      case 3:
        return <Endereco />;
      case 4:
        return <Relato />;
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <Header />
      <OverlayContainer>
        <Container>
          <ProgressContainer>
            <Progress totalSteps={totalSteps} step={step} />
            <Circle active={step >= 1}>1</Circle>
            <Circle active={step >= 2}>2</Circle>
            <Circle active={step >= 3}>3</Circle>
            <Circle active={step >= 4}>4</Circle>
          </ProgressContainer>
          <Content>{renderSteps()}</Content>
          <Btns>
            <ButtonPrev disabled={step <= 1} onClick={HandlePrev}>
              Prev
            </ButtonPrev>
            <ButtonNext disabled={step === totalSteps} onClick={HandleNext}>
              Next
            </ButtonNext>
          </Btns>
        </Container>
      </OverlayContainer>
    </PageContainer>
  );
}

export default OverlayForm;
