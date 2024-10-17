import styled from "styled-components";
import Introduction from "./IntroductionForm";
import BtnForm from "./BtnToForm";

const ConnectContaienr = styled.div`
  color: #fffce1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid blue; */
`;

const MainContainer = styled.div`
  margin: 0 auto;
  width: 85%;
  /* border: 0.5px solid red; */
  & > * + * {
    margin-top: 10rem;
  }
`;

function MainSparkConnect() {
  return (
    <ConnectContaienr>
      <MainContainer>
        <Introduction />
        <BtnForm />
      </MainContainer>
    </ConnectContaienr>
  );
}

export default MainSparkConnect;
