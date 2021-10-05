import styled from 'styled-components';
import { device } from '../../../globalHelpers';

export const PageContent = styled.div`
  height: 100vh;
  background-image: linear-gradient(#180000 50%, #57211d);
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  text-align: center;
  color: #ff9f00;
`;
export const Container = styled.div`
  background-color: #ff9f00;
  color: #000;
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
  overflow-y: auto;
  margin-top: 1em;
  @media ${device.tablet} {
    margin: 2em auto 0;
  }
`;
export const PlacementList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  @media ${device.tablet} {
    width: 80vw;
    max-width: 50em;
  }
`;
export const Legend = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  border-bottom: 0.2em solid #ea1a30;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  padding: 1em 1.5em;
  border-bottom: 1px solid #000;
`;
export const Rank = styled.div`
  flex: 1;
`;
export const Name = styled.div`
  width: 20%;
  text-align: center;
`;
export const CompletionTime = styled.div`
  flex: 1;
  text-align: end;
`;
