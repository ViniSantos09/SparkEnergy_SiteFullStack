import styled from "styled-components"
import NavBar from "./NavBar"

const HeaderContainer = styled.header`
    background-color: #333;
    width: 100%;
    box-sizing: border-box;
`

function Header() {
    return (
        <>
            <HeaderContainer>
                <NavBar/>
            </HeaderContainer>
        </>
    )
}

export default Header