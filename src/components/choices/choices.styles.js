import styled from 'styled-components';
import { device } from '../../globalHelpers';
import { ReactComponent as svg } from '../../assets/target.svg';
import { IoIosCloseCircle } from 'react-icons/io';

export const CloseButton = styled(IoIosCloseCircle)`
  padding: 0.5em;
  justify-self: end;
  align-self: end;
  position: absolute;
  top: 0;
  right: 0;
  color: #000;
  &:hover {
    color: #ea1a30;
    transform: scale(1.2);
  }
`;
export const ModalContent = styled.div``;
export const TargetIcon = styled(svg)`
  position: absolute;
  left: ${({ $targetPosition }) => `${$targetPosition.targetX + 12}px`};
  top: ${({ $targetPosition }) => `${$targetPosition.targetY + 12}px`};
  width: 1.55em;
  @media ${device.laptop} {
    width: 3.1em;
    left: ${({ $targetPosition }) => `${$targetPosition.targetX}px`};
    top: ${({ $targetPosition }) => `${$targetPosition.targetY}px`};
  }
`;
export const CharactersContainer = styled.div`
  overflow-y: auto;
  @media ${device.laptop} {
    position: absolute;
    left: ${({ $modalPosition }) => `${$modalPosition.modalX}px`};
    top: ${({ $modalPosition }) => `${$modalPosition.modalY}px`};
    width: 22rem;
    min-height: 6.25em;
    max-height: 12.5em;
    overflow-y: auto;
  }
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
