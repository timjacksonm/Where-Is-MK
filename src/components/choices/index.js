import React from 'react';
import {
  ModalContent,
  TargetIcon,
  CharactersContainer,
  Card,
  PortraitContainer,
  PortraitImage,
  Name,
  CloseButton,
} from './choices.styles';
import { isCharacterFound } from '../../firebase';
let timeoutID;

const Choices = (props) => {
  const { charactersToFind, setPositionXY, setAlertText } = props;
  const { targetPosition, modalPosition, exactCoords } = props.positionXY;

  const handleCharacterSelection = async (id, name) => {
    const response = await isCharacterFound(exactCoords, id);
    clearTimeout(timeoutID);
    if (response) {
      setAlertText({ string: `You found ${name}`, bgColor: '#006400' });
      charactersToFind.removeById(id);
    }
    if (!response) {
      setAlertText({ string: `Keep looking!`, bgColor: '#ea1a30' });
    }
    timeoutID = setTimeout(() => {
      setAlertText(false);
    }, 2000);
    setPositionXY(false);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setPositionXY(null);
  };

  return (
    <ModalContent>
      <TargetIcon $targetPosition={targetPosition} />
      <CharactersContainer $modalPosition={modalPosition}>
        {charactersToFind.characters.map(({ id, name, src }) => {
          return (
            <Card key={id} onClick={() => handleCharacterSelection(id, name)}>
              <CloseButton size="1.5em" onClick={handleClose} />
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
