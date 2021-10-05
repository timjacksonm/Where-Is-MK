import React from 'react';
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
      <Settings />
      <Footer />
    </PageContent>
  );
};

export default Home;
