import styled from "styled-components";

const FooterContainer = styled.footer`
  border: 5px solid yellow;
  background-color: yellow;
  color: black;
`;

function Footer() {
  return (
    <FooterContainer>
      <h1>Footer</h1>
    </FooterContainer>
  );
}

export default Footer;
