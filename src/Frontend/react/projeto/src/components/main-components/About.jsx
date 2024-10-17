import styled from "styled-components"

const AboutContainer = styled.section`
    border: 5px solid blue;
    height: 50vh;
    background-color: black;
`

const H1 = styled.h1`
    color: white;
`

function About() {

    return (
      <AboutContainer id="about">
        <H1>About us - Part</H1>
      </AboutContainer>
    );
}

export default About