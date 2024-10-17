import styled from "styled-components";

const FormContainer = styled.div`
  width: 94%;
  margin-bottom: 2rem;
  font-family: "Poppins", sans-serif;
`;

const EntryArea = styled.div`
  position: relative;
  height: 47px;
  line-height: 50px;
  font-family: inherit;
`;

const TextAreaInput = styled.textarea`
  position: absolute;
  width: 100%;
  outline: none;
  font-size: 1.1em;
  padding: 25px 15px; /* Adiciona espaçamento no topo e nas laterais */
  border-radius: 10px;
  border: 2px solid #00000091;
  font-family: "Poppins", sans-serif;

  background: transparent;
  transition: 0.1s ease;
  z-index: 1111;
  resize: none; /* Remove a opção de redimensionar */
  height: 150px; /* Defina a altura do textarea */

  &:focus,
  &:valid {
    color: #630cf1;
    border: 2px solid #630cf1;
  }

  &:focus ~ div,
  &:valid ~ div {
    color: #630cf1;
    transform: translate(-15px, -25px) scale(0.88);
    z-index: 1111;
  }

  &.invalid {
    border: 2px solid red;
  }
`;

const Label = styled.div`
  position: absolute;
  left: 7px;
  font-size: 1.15em;
  color: #000000b2;
  padding: 0 5px;
  margin: 0 15px;
  transition: 0.2s ease;
  background-color: #fff;
`;

function TextArea() {
  return (
    <FormContainer>
      <EntryArea style={{ height: "150px" }}>
        <form>
          <TextAreaInput required />
          <Label>Digite a descrição</Label>
        </form>
      </EntryArea>
    </FormContainer>
  );
}

export default TextArea;
