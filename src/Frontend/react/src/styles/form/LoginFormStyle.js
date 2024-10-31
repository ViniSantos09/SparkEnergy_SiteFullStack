import styled from "styled-components";
import { Link } from "react-router-dom";

// Login.js
export const PageContainer = styled.div`
  //...
  background-color: #0b0b0b;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (max-width: 950px) {
    height: 124vh;
  }
`;

export const OverlayContainer = styled.div`
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;

  @media (max-width: 950px) {
    align-items: end;
    font-family: "Poppins", sans-serif;
    padding-bottom: 5vh;
  }
`;

export const Container = styled.div`
  width: 550px;
  background-color: #fff;
  color: black;
  padding: 1rem 2rem;
  border-radius: 5px;
  overflow-x: hidden;
  margin: 0 auto;
`;

// =========================================

// Login Form
export const Content = styled.div`
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

export const FormContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  font-family: "Poppins", sans-serif;
`;

export const EntryArea = styled.div`
  position: relative;
  height: 47px;
  line-height: 51px;
  font-family: inherit;
  margin-bottom: 10px;
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  position: absolute;
  width: 100%;
  outline: none;
  font-size: 1.1em;
  padding: 0 15px;
  line-height: 50px;
  border-radius: 10px;
  border: 2px solid #00000091;
  background: transparent;
  transition: 0.1s ease;
  z-index: 1111;

  &:focus,
  &:valid {
    color: #005700;
    border: 2px solid #005700;
  }

  &:focus ~ div,
  &:valid ~ div {
    color: #005700;
    height: 20px;
    line-height: 30px;
    transform: translate(-20px, -15px) scale(0.88);
    z-index: 1111;
  }

  &.invalid {
    border: 2px solid red;
  }

  ${({ $hasError }) =>
    $hasError &&
    `
      &:focus,
      &:valid {
        color: red;
        border: 2px solid red;
      }


      &:focus ~ div,
      &:valid ~ div {
        color: red;
        height: 20px;
        line-height: 30px;
        transform: translate(-20px, -15px) scale(0.88);
        z-index: 1111;
      }
  `}
`;

export const Label = styled.div`
  position: absolute;
  left: 7px;
  font-size: 1.15em;
  color: #000000b2;
  padding: 0 5px;
  margin: 0 15px;
  transition: 0.2s ease;
  background-color: #fff;
`;

export const ButtonLogin = styled.button`
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  border-radius: 4px;
  background-color: #005700;
  color: #ffd700;
  padding: 5px 40px;
  width: 100%;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    outline: none;
    transform: scale(0.98);
  }
`;
export const ErrorMessage = ({ error }) => {
  if (!error) return null;

  switch (error.type) {
    case "required":
      return <P>{error.message}</P>; // Exibe a mensagem para erro do tipo "required"
    case "minLength":
      return <P>{error.message}</P>; // Exibe a mensagem para erro do tipo "minLength"
    case "validate":
      return <P>{error.message}</P>; // Exibe a mensagem para erro do tipo "validate"
    default:
      return <P>{error.message}</P>; // Exibe mensagem genérica para outros erros
  }
};

const P = styled.p`
  color: red;
`;

export const ButtonShowPassword = styled.button`
  position: absolute;
  z-index: 9999;
  right: 14px;
  top: 15px;
  border: none;
  background: transparent;
  color: #005700;
  font-size: 1rem;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
<<<<<<< HEAD

  ${({ $hasError }) =>
    $hasError &&
    `
        color: red;
  `}
=======
>>>>>>> 8c7e2788fd1992c7abd90145060b5734d5efddc9
`;

export const LinkPage = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
