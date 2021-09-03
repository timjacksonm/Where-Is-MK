import React, { useState, useEffect } from 'react';
import './index.css';

const Header = ({ start }) => {
  const [timer, setTimer] = useState('');
  const [findCount, setFindCount] = useState('');

  useEffect(() => {
    //start ? run timer && display remaining counter character to find
  }, [start]);
  return (
    <div className="header">
      <div>{timer}</div>
      <div>Where-Is Mortal Kombat</div>
      <div>{findCount}</div>
    </div>
  );
};

export default Header;
