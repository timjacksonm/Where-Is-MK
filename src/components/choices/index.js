import React from 'react';
import {
  ModalContent,
  TargetIcon,
  CharactersContainer,
  Card,
  PortraitContainer,
  PortraitImage,
  Name,
} from './choices.styles';
import verifyCharacterData from '../../firebase';

const Choices = (props) => {
  const { charactersToFind, setPositionXY, setAlertText } = props;
  const { targetPosition, modalPosition } = props.positionXY;
  const { exactCoords } = props.positionXY;

  const handleClick = async (id, name) => {
    const response = await verifyCharacterData(exactCoords, id);
    if (response) {
      setAlertText({ string: `You found ${name}`, bgColor: '#006400' });
      setTimeout(() => {
        setAlertText(false);
      }, 2000);
      charactersToFind.removeById(id);
    }
    if (!response) {
      setAlertText({ string: `Keep looking!`, bgColor: '#ea1a30' });
      setTimeout(() => {
        setAlertText(false);
      }, 2000);
    }
    setPositionXY(false);
  };

  return (
    <ModalContent>
      <TargetIcon targetPosition={targetPosition} />
      <CharactersContainer modalPosition={modalPosition}>
        {charactersToFind.characters.map(({ id, name, src }) => {
          return (
            <Card key={id} onClick={() => handleClick(id, name)}>
              <PortraitContainer>
                <PortraitImage src={src} alt={id} />
              </PortraitContainer>
              <Name>{name}</Name>
            </Card>
          );
        })}
      </CharactersContainer>
    </ModalContent>
  );
};

export default Choices;
