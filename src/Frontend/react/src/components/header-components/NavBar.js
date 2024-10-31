import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AlignJustify, X } from "lucide-react";
import LogoImg from "../../assets/images/header_imgs/logo.png";
import { AuthContext } from "../../Helpers/AuthContext";

//============================== Navbar Normal ==============================//

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: relative;
  background-color: transparent;
`;

const Logo = styled(Link)`
  cursor: pointer;

  &:active {
    scale: 0.96;
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: 110px;

  @media (max-width: 1220px) {
    padding: 0;
  }

  @media (max-width: 950px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.25rem;
    position: relative;
  }

  a:hover {
    color: #ffe100;
    transition: 0.4s ease-in-out;
  }

  a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #ffe100;
    left: 0;
    bottom: 0;
    transition: width 0.4s ease-in-out;
  }

  a:hover::after {
    width: 100%;
  }
`;

const ActionButton = styled(Link)`
  background-color: #f6e24b;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: scale 0.3s ease;

  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 0.95;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

const BtnsConnect = styled.div`
  // ...
`;

//============================== Navbar DropDown ==============================//

const ToggleButton = styled.div`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 950px) {
    display: none; /* Oculta em telas grandes */
  }
`;

const DropdownMenu = styled.div`
  display: ${({ $isOpen }) =>
    $isOpen ? "block" : "none"}; /* Controla a visibilidade */
  position: absolute;
  width: 300px;
  right: 1.5rem;
  top: 60px;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 8px rgba(0, 0, 0);

  @media (max-width: 950px) {
    background: #ffe100;
  }
`;

const LiDropdown = styled(Link)`
  font-size: 1rem;
  display: block;
  padding: 0.7rem;
  font-weight: 500;
  font-family: "Poppins";
  color: #fff;
  text-align: center;
  text-decoration: none;
  transition: background-color 1s ease;

  &:first-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  &:hover {
    background-color: #000;
    color: #ffe100;
  }

  @media (max-width: 950px) {
    color: #000;
  }
`;

const UlDropdown = styled.ul`
  list-style: none;
  margin: 0;
`;

const ButtonDrop = styled(Link)`
  color: #f6e24b;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Poppins";
  cursor: pointer;
  display: block;
  padding: 0.7rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
  text-decoration: none;
  transition: background-color 1s ease;

  &:hover {
    background-color: #000;
  }
  @media (max-width: 950px) {
    color: #005700;
  }
`;

const Nav = styled(Link)`
  margin: 0 1em;
  cursor: pointer;
  color: black;
  text-decoration: none;
  color: #ffe100;

  @media (max-width: 950px) {
    display: none; /* Oculta em telas pequenas */
  }

  &:active {
    scale: 0.95;
  }
`;

//============================== Exportar ==============================//

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { authState } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavbarContainer>
      <Logo to="/">
        <img src={LogoImg} alt="Logo da Empresa" />
      </Logo>
      <nav>
        <Ul>
          <Nav to="/">Home</Nav>
          <Nav to="/" onClick={(e) => scrollToSection(e, "about")}>
            About
          </Nav>
          <Nav to="#services" onClick={(e) => scrollToSection(e, "services")}>
            Services
          </Nav>
          <Nav to="/SparkPost">SparkPost</Nav>
          <Nav to="/Contacts">Contacts</Nav>
        </Ul>
      </nav>
      {!authState && (
        <BtnsConnect>
          <ActionButton style={{ marginRight: "4px" }} to="/Login">
            Login
          </ActionButton>
          <ActionButton to="/signUp">Cadastro</ActionButton>
        </BtnsConnect>
      )}

      <ToggleButton onClick={toggleMenu}>
        {isOpen ? <X /> : <AlignJustify />}
      </ToggleButton>

      <DropdownMenu $isOpen={isOpen}>
        <UlDropdown>
          <LiDropdown to="/">Home</LiDropdown>
          <LiDropdown to="/" onClick={(e) => scrollToSection(e, "about")}>
            About
          </LiDropdown>
          <LiDropdown
            to="#services"
            onClick={(e) => scrollToSection(e, "services")}
          >
            Services
          </LiDropdown>
          <LiDropdown to="/SparkPost">SparkPost</LiDropdown>
          <LiDropdown to="/Contacts">Contacts</LiDropdown>
          {!authState && (
            <>
              <ButtonDrop to="/SignUp">Cadastro</ButtonDrop>
              <ButtonDrop to="/Login">Login</ButtonDrop>
            </>
          )}
        </UlDropdown>
      </DropdownMenu>
    </NavbarContainer>
  );
}

export default NavBar;
