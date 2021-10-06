import React, { useState } from 'react';
import {
  PageContent,
  Container,
  Character,
  Details,
  Link,
  BackBtn,
} from './attributions.styles';
import { getRandomCharacters } from '../../globalHelpers';
const Attributions = () => {
  const [background] = useState(getRandomCharacters(79, 1, 79));

  const handleClick = () => {
    window.location.href = `#/`;
  };

  return (
    <PageContent>
      <Container>
        {background.map(({ id, src, name }) => (
          <Character key={id} src={src} alt={name}></Character>
        ))}
      </Container>
      <Details>
        <BackBtn onClick={handleClick} size="2em" />
        <Link href="https://www.behance.net/gallery/99271971/Mortal-Kombat-Wheres-Scorpion-illustration">
          Mortal Kombat Poster used as background and individual characters.
          Created by Gusmorais
        </Link>
        <Link href="https://1000logos.net/mortal-kombat-logo/">
          The Mortal Kombat emblem made by 1000logos.net
        </Link>
        <Link
          href="https://www.flaticon.com/authors/vectors-market"
          title="Vectors Market"
        >
          Target Icon made by Vectors Market from www.flaticon.com
        </Link>
        <Link href=" https://codepen.io/nikhil8krishnan">
          Loader Icon made by Nikhil Krishnan
        </Link>
      </Details>
    </PageContent>
  );
};

export default Attributions;
