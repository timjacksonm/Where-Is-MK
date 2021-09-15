import React, { useState, useEffect } from 'react';
import { FaUserSecret } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import {
  HeaderContent,
  Navbar,
  FindContainer,
  Count,
  CharacterList,
  Card,
} from './header.styles.js';

const Header = ({ start, charactersToFind, dropdownOpen, setDropdownOpen }) => {
  const [timer, setTimer] = useState('');
  const [Remaining, setRemaining] = useState('');

  const open = () => setDropdownOpen(true);
  const close = () => setDropdownOpen(false);
  useEffect(() => {
    //start ? run timer && display remaining counter character to find
    const { characters } = charactersToFind;
    setRemaining(characters.length);
  }, [start, charactersToFind]);
  return (
    <HeaderContent>
      <Navbar>
        <FindContainer>
          <div>Find</div>
          <Count>{Remaining}</Count>
          <div>More</div>
          <FaUserSecret color="#000" size="2em" />
          {dropdownOpen ? (
            <MdExpandLess size="2em" onClick={close} />
          ) : (
            <MdExpandMore size="2em" onClick={open} />
          )}
        </FindContainer>
        <div>{'timer'}</div>
      </Navbar>
      {dropdownOpen && (
        <CharacterList>
          {charactersToFind.characters.map(({ id, src, name }) => {
            return (
              <Card key={id}>
                <img src={src} alt={name} />
                <div>{name}</div>
              </Card>
            );
          })}
        </CharacterList>
      )}
    </HeaderContent>
  );
};

export default Header;
