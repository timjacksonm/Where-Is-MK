import React from 'react';
import {
  PageContent,
  LogoContainer,
  TextImageText,
  Image,
} from './home.styles';
import Footer from './../../footer';
import Settings from './settings';
import Logo from '../../../assets/Mortal-Kombat-logo.png';

const Home = () => {
  return (
    <PageContent>
      <LogoContainer>
        <h1>Where is</h1>
        <TextImageText>
          <h1>Mortal</h1>
          <Image src={Logo} alt="Mortal Kombat Dragon Logo" />
          <h1>Kombat</h1>
        </TextImageText>
        <div>A Seek-And-Find Game</div>
      </LogoContainer>
      <Settings />
      <Footer />
    </PageContent>
  );
};

export default Home;
