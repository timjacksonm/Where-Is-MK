import styled from 'styled-components';
import { device } from '../../globalHelpers';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

export const HeaderContent = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ff9f00;
  letter-spacing: 1px;
`;
export const Navbar = styled.div`
  display: flex;
  padding: 2em 0.5em;
  align-items: center;
  justify-content: space-between;
  @media ${device.laptop} {
    padding: 2em 4em;
  }
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
  font-family: MKtitle;
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ea1a30;
`;
export const OpenButton = styled(MdExpandLess)`
  &:hover {
    & path {
      color: #ea1a30;
    }
  }
`;
export const CloseButton = styled(MdExpandMore)`
  &:hover {
    & path {
      color: #ea1a30;
    }
  }
`;
export const CharacterList = styled.div`
  display: flex;
  overflow-y: hidden;
  border-top: 0.2em solid #000;
  background-image: linear-gradient(#ff9f00 56%, #57211d);
  padding: 0.5em 0;
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
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
