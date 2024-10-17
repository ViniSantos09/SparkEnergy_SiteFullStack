import styled from "styled-components";
import Header from "../components/containers/Header";
import Main from "../components/form-components/main-page/MainSparkConnect";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0e100f;
`;

function SparkConnect() {
  return (
    <PageContainer>
      <Header />
      <Main />
    </PageContainer>
  );
}

export default SparkConnect;
