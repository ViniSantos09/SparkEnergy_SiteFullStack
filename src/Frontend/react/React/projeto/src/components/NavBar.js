import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.nav`
    width: 100%;
    border: solid 2px green;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    padding-left: 10rem;
    box-sizing: border-box;
`

const Menu = styled(Link)`
    margin: 0 1rem;
    border: solid 2px red;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    align-items: center;
    
    &:hover {
        text-decoration: underline;
    }
`;

const MenuContainer = styled.div`
    border: solid 2px blue;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
`

const Button = styled(Link)`
    background-color: #000;
    padding: 0.5rem 1rem;
    color: #fff;
    border-radius: 20px;
    margin-right: 10rem;
    font-weight: bold;
    text-decoration: none;
    font-size: 0.8rem;

    &:hover {
        scale: 1.05;
        color: #f6e24b;
    }
`;


function NavBar() {
    return (
        <NavBarContainer>
            <Logo>SparkEnergy</Logo>
            <MenuContainer>
                <Menu to="/">Início</Menu>
                <Menu to="/noticias">Notícias</Menu>
                <Menu to="/sobre">Sobre</Menu>
                <Menu to="/doe">Doe</Menu>
            </MenuContainer>
                <Button to="/form">Comece Agora</Button>
        </NavBarContainer>
    );
}

export default NavBar;


// import styled from "styled-components"
// import { Link } from "react-router-dom"

// const NavBarContainer = styled.nav`
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     padding: 1em 0;
// `
// const Menu = styled(Link)`
//     justify-content: space-around;
//     margin: 0 1em;
//     cursor: pointer;
//     color: black;
//     text-decoration: none;
//     &:hover {
//         text-decoration: underline;
//         color: black;
//     }
// `

// const Button = styled.button`
    
// `   

// function NavBar() {

//     return(
//         <NavBarContainer>
//             <Menu to="/">Início</Menu>
//             <Menu to="/About">Notícias</Menu>
//             <Menu to="/Services">Sobre</Menu>
//             <Menu to="/Contacts">Doe</Menu>
//             <Button to="/Form">Comece Agora</Button>
//         </NavBarContainer>
//     )
// }

// export default NavBar