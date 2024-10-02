import styled from "styled-components"


const FooterContainer = styled.footer`
    background-color: yellow;
    padding: 10px 20px;
`


function Footer() {
    return (
        <FooterContainer>
            <h1>Footer</h1>
        </FooterContainer>
    )
}


export default Footer