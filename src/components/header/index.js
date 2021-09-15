import React, { useState, useEffect } from 'react';
import { FaUserSecret } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import './header.css';

const Header = ({ start, charactersToFind }) => {
  const [timer, setTimer] = useState('');
  const [findCount, setFindCount] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);
  useEffect(() => {
    //start ? run timer && display remaining counter character to find
    const { characters } = charactersToFind;
    setFindCount(characters.length);
  }, [start, charactersToFind]);
  return (
    <div className="header">
      <div className="navbar">
        <div className="findTitle">
          <div>Find</div>
          <div className="count">{findCount}</div>
          <div>More</div>
          <FaUserSecret color="#000" size="2em" />
          {modalOpen ? (
            <MdExpandLess size="2em" onClick={close} />
          ) : (
            <MdExpandMore size="2em" onClick={open} />
          )}
        </div>
        <div>{'timer'}</div>
      </div>
      {modalOpen && (
        <div className="characters">
          {charactersToFind.characters.map(({ id, src, name }) => {
            return (
              <div key={id}>
                <img src={src} alt={name} />
                <div>{name}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Header;
