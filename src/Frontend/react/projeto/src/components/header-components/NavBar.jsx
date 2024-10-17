import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

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
`;

const Logo = styled(Link)`
  font-family: "Robotech", sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  background-image: linear-gradient(
    to left,
    #d9cb04,
    #bfb304,
    #736b02,
    #313131
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

const Ul = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 950px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.25rem;
    position: relative;
  }

  a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #ffe100;
    left: 0;
    bottom: 0;
    transition: width 0.3s ease-in-out;
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

const ButtonDrop = styled(Link)`
  background-color: #f6e24b;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 0.95;
  }
`;

const ToggleButton = styled.div`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 950px) {
    display: none; /* Oculta em telas grandes */
  }
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) =>
    isOpen ? "block" : "none"}; /* Controla a visibilidade */
  position: absolute;
  width: 300px;
  right: 1.5rem;
  top: 60px;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  padding-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const LiDropdown = styled(Link)`
  display: block;
  padding: 0.7rem;
  color: white;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const UlDropdown = styled.ul`
  list-style: none;
  padding-bottom: 0.5rem;
  margin: 0;
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
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

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
      <Logo to="/">SparkEnergy</Logo>
      <nav>
        <Ul>
          <Nav to="/">Home</Nav>
          <Nav to="/" onClick={(e) => scrollToSection(e, "about")}>
            About
          </Nav>
          <Nav to="#services" onClick={(e) => scrollToSection(e, "services")}>
            Services
          </Nav>
          <Nav to="/Contacts">Contacts</Nav>
        </Ul>
      </nav>
      <ActionButton to="/SparkConnect">SparkConnect</ActionButton>

      <ToggleButton onClick={toggleMenu}>
        {isOpen ? <X /> : <AlignJustify />}
      </ToggleButton>

      <DropdownMenu isOpen={isOpen}>
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
          <LiDropdown to="/Contacts">Contacts</LiDropdown>
        </UlDropdown>
        <ButtonDrop to="/SparkConnect">SparkConnect</ButtonDrop>
      </DropdownMenu>
    </NavbarContainer>
  );
}

export default NavBar;
