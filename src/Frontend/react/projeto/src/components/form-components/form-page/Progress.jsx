import styled from "styled-components";

const ProgressContainer = styled.div`
  background-color: var(--line-border-fill);
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  height: 4px;
  z-index: 1;
  transition: all 0.8s ease-in;

  &.style {
    height: 4px;
    background: #d9d9d9;
    width: 100%;
    transition: all 0.4s ease-in;
  }
`;

const ProgressContainer2 = styled.div`
  &.style {
    height: 4px;
    background: #630cf1;
    width: ${({ progress }) => `${progress}%`};
    transition: all 0.4s ease-in;
  }
`;

function Progress({ totalSteps, step }) {
  const progress = ((step - 1) / totalSteps) * 130;

  return (
    <ProgressContainer className="style">
      <ProgressContainer2
        className="style"
        progress={progress}
      ></ProgressContainer2>
    </ProgressContainer>
  );
}

export default Progress;
