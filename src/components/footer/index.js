import React from 'react';
import { ReactComponent as Github } from '../../assets/github-icon.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import './index.css';

const Footer = () => {
  return (
    <div className="footer">
      <div>Attributions</div>
      <div className="self">
        <div className="name">Created by TJ</div>
        <div className="links">
          <a href="https://github.com/timjacksonm">
            <Github />
          </a>
          <a href="https://twitter.com/TimJacksonMN">
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
