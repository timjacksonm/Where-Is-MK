import styled from 'styled-components';
import { ReactComponent as svg } from '../../assets/target.svg';

export const ModalContent = styled.div``;
export const TargetIcon = styled(svg)`
  position: absolute;
  left: ${({ targetPosition }) => `${targetPosition.targetX}px`};
  top: ${({ targetPosition }) => `${targetPosition.targetY}px`};
  width: 3.1em;
`;
export const CharactersContainer = styled.div`
  position: absolute;
  left: ${({ modalPosition }) => `${modalPosition.modalX}px`};
  top: ${({ modalPosition }) => `${modalPosition.modalY}px`};
  width: 22rem;
  min-height: 6.25em;
  max-height: 12.5em;
  overflow-y: auto;
`;
export const Card = styled.div`
  display: flex;
  padding: 0.2em 0.5em 0;
  background-image: linear-gradient(#ff9f00 50%, #57211d);
  border: 0.2em solid #000;
  &:hover {
    border: solid #fff;
  }
`;
export const PortraitContainer = styled.div`
  position: relative;
  width: 8.1em;
  height: 6.25em;
  overflow: hidden;
`;
export const PortraitImage = styled.img`
  width: 11.25em;
  position: absolute;
  left: -2.34em;
`;
export const Name = styled.p`
  flex: 1;
  align-self: center;
  text-align: center;
`;
