import styled from 'styled-components';
import { ReactComponent as svg } from '../../../assets/loader.svg';

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #000;
`;
export const Loader = styled(svg)`
  align-self: center;
`;
export const MainContent = styled.div`
  position: relative;
`;
export const Alert = styled.h1`
  position: fixed;
  left: 0;
  right: 0;
  padding: 0.5em;
  width: fit-content;
  font-family: roboto;
  font-size: 1.5em;
  border-radius: 2em;
  margin: auto;
  text-align: center;
  background-color: ${({ $alertText }) => $alertText.bgColor};
`;
export const BackgroundImage = styled.img`
  width: 100%;
`;
