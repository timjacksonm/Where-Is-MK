import styled from 'styled-components';

export const PageContent = styled.div`
  height: 100vh;
  background-image: linear-gradient(#180000 50%, #57211d);
  display: flex;
  flex-direction: column;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  font-size: 1em;
  letter-spacing: 0.5em;
  margin: 1em;
  color: #ff9f00;
`;
export const TextImageText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 25vw;
  max-height: 50vh;
`;
export const Image = styled.img`
  width: 50vw;
  max-width: 300px;
  height: auto;
  margin: 1em;
`;
