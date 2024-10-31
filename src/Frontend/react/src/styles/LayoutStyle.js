import styled from "styled-components";

export const LProfWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const LProfContainer = styled.div`
  /* border: 1px solid red; */
  width: 700px;
  text-align: center;
`;

export const LProfBox = styled.div``;

export const Prof = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #333;
  margin-top: 2rem;
`;

export const LProf = styled.div`
  display: ${({ $isOpen }) =>
    $isOpen ? "block" : "none"}; /* Controla a visibilidade */
`;

export const ProfButton = styled.button`
  background: none;
  color: white;
  border: none;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid blue; */
  width: 100%;
`;

export const LProfContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
`;

export const LProfH3 = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

export const LProfP = styled.p`
  text-align: left;
`;

export const LProfImg = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 8px;
`;
