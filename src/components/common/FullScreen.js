import styled from 'styled-components';

const FullScreenBlock = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--df-dimed), 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullScreen = (props) => {
  return <FullScreenBlock {...props} />;
};

export default FullScreen;
