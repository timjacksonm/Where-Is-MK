import styled from 'styled-components';
import { device } from '../../../globalHelpers';
import { ReactComponent as svg } from '../../../assets/loader.svg';

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #000;
`;
export const Loader = styled(svg)`
  position: fixed;
  top: 112px;
  z-index: 1;
  align-self: center;
`;
export const MainContent = styled.div`
  position: relative;
`;
export const Alert = styled.h1`
  position: fixed;
  top: 17vh;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 0.5em;
  width: fit-content;
  font-family: roboto;
  font-size: 1.5em;
  border-radius: 2em;
  margin: auto;
  text-align: center;
  background-color: ${({ $alertText }) => $alertText.bgColor};
  @media ${device.laptop} {
    top: 20px;
  }
`;
export const BackgroundImage = styled.img`
  margin-top: 112px;
  width: 100%;
`;
