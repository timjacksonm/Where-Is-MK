import React, { useEffect } from 'react';
import './index.css';

const Choices = (props) => {
  const { modalX, modalY, targetX, targetY } = props.mouseXY;
  let divStyle = {
    left: `${modalX}px`,
    top: `${modalY}px`,
  };
  let divStyle2 = {
    left: `${targetX}px`,
    top: `${targetY}px`,
  };
  return (
    <>
      <svg
        className="target"
        style={divStyle2}
        width="50px"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 490 490"
        fill="#fff"
      >
        <g>
          <polygon points="329.4,47.5 442.5,47.5 442.5,160.6 490,160.6 490,0 329.4,0 			" />
          <polygon points="47.5,160.6 47.5,47.5 160.6,47.5 160.6,0 0,0 0,160.6 			" />
          <polygon points="442.5,329.4 442.5,442.5 329.4,442.5 329.4,490 490,490 490,329.4 			" />
          <polygon points="160.6,442.5 47.5,442.5 47.5,329.4 0,329.4 0,490 160.6,490 			" />
        </g>
      </svg>
      <div style={divStyle} className="modal"></div>
    </>
  );
};

export default Choices;
