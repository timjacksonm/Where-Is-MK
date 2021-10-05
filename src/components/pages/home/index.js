import React, { useState } from 'react';
import {
  PageContent,
  LogoContainer,
  TextImageText,
  Image,
  Description,
  Title,
} from './home.styles';
import Footer from './../../footer';
import Settings from '../../settings';
import Logo from '../../../assets/Mortal-Kombat-logo.png';

const Home = () => {
  const [time, setTime] = useState('');
  const [characters, setCharacters] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState(' ');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (time && characters) {
      window.location.href = `${window.location.href}game/${time}/${characters}`;
    }
    setError(true);
    console.log(true);
    setHelperText('Please finish selecting your settings');
  };
  return (
    <PageContent>
      <LogoContainer>
        <Title firstChild>Where is</Title>
        <TextImageText>
          <Title>Mortal</Title>
          <Image src={Logo} alt="Mortal Kombat Dragon Logo" />
          <Title>Kombat</Title>
        </TextImageText>
        <Description>A Seek-And-Find Game</Description>
      </LogoContainer>
      <Settings
        handleSubmit={handleSubmit}
        setTime={setTime}
        setCharacters={setCharacters}
        helperText={helperText}
      />
      <Footer />
    </PageContent>
  );
};

export default Home;
