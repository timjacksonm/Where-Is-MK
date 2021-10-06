import React from 'react';
import { ReactComponent as GithubIcon } from '../../assets/github-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { Wrapper, MyInfo, LinkContainer, Link } from './footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <Link href="#/attributions">Attributions</Link>
      <MyInfo>
        <div>Created by TJ</div>
        <LinkContainer>
          <Link href="https://github.com/timjacksonm">
            <GithubIcon />
          </Link>
          <Link href="https://twitter.com/TimJacksonMN">
            <TwitterIcon />
          </Link>
        </LinkContainer>
      </MyInfo>
    </Wrapper>
  );
};

export default Footer;
