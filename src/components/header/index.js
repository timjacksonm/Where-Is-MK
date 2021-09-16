import React from 'react';
import { FaUserSecret } from 'react-icons/fa';
import Timer from '../timer';
import {
  HeaderContent,
  Navbar,
  FindContainer,
  Count,
  CharacterList,
  Card,
  OpenButton,
  CloseButton,
} from './header.styles.js';

const Header = ({ charactersToFind, dropdownOpen, setDropdownOpen }) => {
  const { characters } = charactersToFind;

  const open = () => setDropdownOpen(true);
  const close = () => setDropdownOpen(false);

  return (
    <HeaderContent>
      <Navbar>
        <FindContainer>
          <div>Find</div>
          <Count>{characters.length}</Count>
          <div>More</div>
          <FaUserSecret color="#000" size="2em" />
          {dropdownOpen ? (
            <OpenButton size="2em" onClick={close} />
          ) : (
            <CloseButton size="2em" onClick={open} />
          )}
        </FindContainer>
        <Timer />
      </Navbar>
      {dropdownOpen && (
        <CharacterList>
          {characters.map(({ id, src, name }) => {
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
