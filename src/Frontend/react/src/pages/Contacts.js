import Header from "../components/containers/Header";
import styled from "styled-components";

const ContactContainer = styled.div`
  margin-top: 20px;
`;

function Contacts() {
  return (
    <>
      <Header />
      <ContactContainer>
        <h1>Contact Page</h1>
      </ContactContainer>
    </>
  );
}

export default Contacts;
