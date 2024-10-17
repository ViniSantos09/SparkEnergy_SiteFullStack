import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
  /* border: 0.5px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100vh;
  gap: 3rem;
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  font-family: "Expletus Sans", sans-serif;
  /* background-image: linear-gradient(to left, #00b0ff, #9c27b0); // roxo com azul */
  background-image: linear-gradient(
    to left,
    #4b0082,
    #ff3
  ); // -> amarelo com cinza
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #ebe700);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &:active,
  &:hover {
    outline: 0;
  }

  &:hover span {
    background: none;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    min-width: 196px;
  }

  span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;

    &:hover {
      color: black;
    }
  }
`;

function Form() {
  return (
    <FormContainer>
      <H2>Sua colaboração é o que vai fazer o futuro acontecer!</H2>

      <Button to="/MultiStepsForm">
        <span>Contribua para o futuro!</span>
      </Button>
    </FormContainer>
  );
}

export default Form;
