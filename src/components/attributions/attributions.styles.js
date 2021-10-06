import styled from 'styled-components';
import { device } from '../../globalHelpers';
import { IoMdHome } from 'react-icons/io';

export const PageContent = styled.div`
  background-image: linear-gradient(#180000 50%, #57211d);
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 1px;
`;
export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;
export const Character = styled.img`
  padding: 0.25em 0;
  width: 5em;
  height: 5em;
  @media ${device.laptop} {
    width: 10em;
    height: 10em;
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 70vw;
  padding: 0 1em 2em;
  background-color: #222425;
  border-radius: 5%;
  max-width: 24em;
  @media ${device.laptop} {
    font-size: 1.2em;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  margin: 0 0.1em;
  cursor: pointer;
  color: #b27c23;
  border-bottom: 0.1em solid #ea1a30;
  padding: 0.5em 0;
  &:hover {
    color: #ff9f00;
  }
`;
export const BackBtn = styled(IoMdHome)`
  align-self: center;
  padding: 1em 0;
  &:hover {
    color: #ff9f00;
  }
`;
