import styled from 'styled-components';

export const PageContent = styled.div`
  height: 100vh;
  background-image: linear-gradient(#180000 50%, #57211d);
  display: flex;
  flex-direction: column;
`;
export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5em auto;
  width: 80vw;
`;
export const OptionTitle = styled.h2`
  align-self: center;
  padding-right: 1em;
`;
export const Container = styled.div`
  margin: 0 auto;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
  overflow-y: auto;
`;
export const PlacementList = styled.ul`
  width: 80vw;
  padding: 0;
  margin: 0;
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
