import styled from 'styled-components';
import { device } from '../../../globalHelpers';

export const PageContent = styled.div`
  height: 100vh;
  background-image: linear-gradient(#180000 50%, #57211d);
  display: flex;
  flex-direction: column;
  font-size: 1em;
  @media ${device.laptop} {
    font-size: 1.1em;
  }
`;
export const Title = styled.h2`
  margin: ${({ firstChild }) => (firstChild ? '0.5em 0' : '0.2em 0')};
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin-bottom: 1em;
  flex: 1;
  font-size: 1em;
  letter-spacing: 0.5em;
  color: #ff9f00;

  @media ${device.mobileL} {
    padding-top: 2em;
    justify-content: center;
  }
`;
export const TextImageText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    flex-direction: row;
  }
`;
export const Description = styled.div`
  text-align: center;
  padding: 1em 0;
`;
export const Image = styled.img`
  width: 40vw;
  max-width: 300px;
  @media ${device.mobileL} {
    margin: 1em;
  }
`;
