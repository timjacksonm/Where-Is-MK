import { useState } from 'react';
import MasterList from './data/characters';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

export const getRandomCharacters = (characters, min, max) => {
  const length = Number(characters) || 79;
  const array = [];
  do {
    const randomNumber = getRandomIntInclusive(min, max);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  } while (array.length < length);

  return array // returns array without duplicates & sorts array by character.id (1-79)
    .map((number) => MasterList.find((object) => object.id === number));
};

export const useCharacters = (initial) => {
  const [characters, setCharacters] = useState(initial);
  return {
    characters,
    setCharacters,
    removeById: (id) =>
      setCharacters((array) => array.filter((object) => object.id !== id)),
  };
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
