import styled from "styled-components";
import TextArea from "./TextArea";
// import FileInput from "./FileInput";

const FormContainer = styled.div`
  width: 94%;
  margin-bottom: 2rem;
  font-family: "Poppins", sans-serif;
`;

const EntryArea = styled.div`
  position: relative;
  height: 47px;
  line-height: 51px;
  font-family: inherit;
`;

const Input = styled.input`
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
    color: #630cf1;
    border: 2px solid #630cf1;
  }

  &:focus ~ div,
  &:valid ~ div {
    color: #630cf1;
    height: 20px;
    line-height: 30px;
    transform: translate(-20px, -15px) scale(0.88);
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

export function DadoPessoal() {
  return (
    <div>
      <h2>Dados Pessoais</h2>
      <FormContainer>
        <EntryArea>
          <form>
            <Input type="text" required />
            <Label>Digite seu nome completo</Label>
          </form>
        </EntryArea>
      </FormContainer>
      <FormContainer style={{ marginBottom: "3rem" }}>
        <EntryArea>
          <form>
            <Input type="text" required />
            <Label>Digite seu nome social(opcional)</Label>
          </form>
        </EntryArea>
      </FormContainer>
    </div>
  );
}

export function Cadastro() {
  return (
    <div>
      <h2>Cadastro</h2>
      <FormContainer>
        <EntryArea>
          <form>
            <Input type="email" required />
            <Label>Digite seu email</Label>
          </form>
        </EntryArea>
      </FormContainer>
      <FormContainer>
        <EntryArea>
          <form>
            <Input type="password" required />
            <Label>Digite sua senha</Label>
          </form>
        </EntryArea>
      </FormContainer>
      <FormContainer>
        <EntryArea>
          <form>
            <Input type="password" required />
            <Label>Confirme sua senha</Label>
          </form>
        </EntryArea>
      </FormContainer>
    </div>
  );
}

export function Endereco() {
  return (
    <div>
      <h2>Endereço</h2>
      <FormContainer>
        <EntryArea>
          <form>
            <Input type="text" required />
            <Label>Digite seu bairro</Label>
          </form>
        </EntryArea>
      </FormContainer>
      <FormContainer>
        <EntryArea>
          <form>
            <Input type="text" required />
            <Label>Digite sua rua</Label>
          </form>
        </EntryArea>
      </FormContainer>
      <FormContainer>
        <EntryArea>
          <form>
            <Input type="text" required />
            <Label>Digite seu estado</Label>
          </form>
        </EntryArea>
      </FormContainer>
    </div>
  );
}

export function Relato() {
  return (
    <div>
      <h2>Faça seu Relato</h2>
      <FormContainer>
        <EntryArea>
          <form>
            <Input type="text" required />
            <Label>Digite seu o titulo</Label>
          </form>
        </EntryArea>
      </FormContainer>
      <TextArea />
      {/* <FileInput /> */}
    </div>
  );
}
