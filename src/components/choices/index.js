import React from 'react';
import './index.css';
import { ReactComponent as Target } from '../../assets/target.svg';

const Choices = (props) => {
  const { modalX, modalY, targetX, targetY } = props.positionXY;
  const { charactersToFind, setMouseXY, setAlertText } = props;

  const modalStyle = {
    left: `${modalX}px`,
    top: `${modalY}px`,
  };
  const targetStyle = {
    left: `${targetX}px`,
    top: `${targetY}px`,
  };

  const handleClick = (e, id, name) => {
    //check with database if position matches character
    const response = true;
    if (response) {
      setAlertText(`You found ${name}`);
      charactersToFind.removeById(id);
    }
    if (!response) {
      setAlertText(`Keep looking!`);
    }
    setMouseXY(false);
  };

  return (
    <div>
      <Target style={targetStyle} />
      <div style={modalStyle} className="modal">
        {charactersToFind.characters.map(({ id, name, src }) => {
          return (
            <div
              className="card"
              key={id}
              onClick={(e) => handleClick(e, id, name)}
            >
              <div className="portrait">
                <img className="headshot" src={src} alt={id} />
              </div>
              <p className="name">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Choices;
