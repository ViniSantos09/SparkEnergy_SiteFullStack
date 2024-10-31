import React from 'react';
import styled from 'styled-components';
//* styled pro container do botao
const ButtonContainer = styled.div`
  position: relative;
  height: 50px; 
  width: 100%; 
`;
//* Styled butao pro scroll
const ScrollButton = styled.button`
  align-items: center;
  color: white;
  height: 50px;
  width: 50px;
  transition: 0.5s;
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translateY(-50%);
  background-color: #1c1c1c;
  border: none; 
  border-radius: 50%; 
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background-color: #333; 
    border-color: transparent;
  }

  &:active {
    background-color: rgba(10,10,10,10);
    border-color: transparent;
  }
`;

//* Styled icon no botau
const Icon = styled.span`
  font-size: 30px; 
  transition: color 0.3s ease;

  ${ScrollButton}:hover & {
    color: #f4c430;
  }
`;

const NavButton = ({ direction }) => {
  const handleScroll = () => {
    const target = direction === 'down' ? '#next-section' : '#previous-section';
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ButtonContainer>
      <ScrollButton onClick={handleScroll} className="botao-up-down">
        <Icon className="material-symbols-outlined">
          {direction === 'down' ? 'arrow_downward' : 'arrow_upward'}
        </Icon>
      </ScrollButton>
    </ButtonContainer>
  );
};

export default NavButton;
