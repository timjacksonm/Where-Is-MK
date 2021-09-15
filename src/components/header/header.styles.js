import styled from 'styled-components';

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ff9f00;
  border-bottom: 1em solid #000;
  letter-spacing: 1px;
`;
export const Navbar = styled.div`
  display: flex;
  padding: 2em 4em;
  align-items: center;
  justify-content: space-between;
`;
export const FindContainer = styled.div`
  display: flex;
  width: 13em;
  justify-content: space-around;
  & div {
    align-self: center;
  }
`;
export const Count = styled.div`
  font-size: 1.3em;
`;
export const CharacterList = styled.div`
  display: flex;
  overflow-y: hidden;
  border-top: 0.2em solid #000;
  background-image: linear-gradient(#ff9f00 56%, #57211d);
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em 0.5em 0;
  height: 10em;
  min-width: 14em;
  & img {
    width: 10em;
    height: 10em;
  }
  & div {
    text-align: center;
    align-self: center;
  }
`;
