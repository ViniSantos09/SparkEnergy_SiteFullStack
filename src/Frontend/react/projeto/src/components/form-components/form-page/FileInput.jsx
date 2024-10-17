import styled from "styled-components";

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

  &:focus,
  &:valid {
    color: #630cf1;
    border: 2px solid #630cf1;
  }

  &:focus ~ div,
  &:valid ~ div {
    color: #630cf1;
  }

  &.invalid {
    border: 2px solid red;
  }
`;

const Label = styled.div`
  position: absolute;
  left: 7px;
  font-size: 1.15em;
  height: 20px;
  line-height: 30px;
  transform: translate(-20px, -15px) scale(0.88);
  color: #000000b2;
  padding: 0 5px;
  margin: 0 15px;
  transition: 0.2s ease;
  background-color: #ffffff;
  z-index: 1111;
`;

function FileInput() {
  return (
    <FormContainer>
      <EntryArea>
        <form>
          <Input type="file" required />
          <Label>Faça upload de arquivo(opcional)</Label>
        </form>
      </EntryArea>
    </FormContainer>
  );
}

export default FileInput;
