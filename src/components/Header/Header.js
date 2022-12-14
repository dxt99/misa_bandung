import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>AEK ITB</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#hero">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#jadwal">
          <NavLink>Jadwal</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons onClick={() => openInNewTab("https://github.com/dxt99")}>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons onClick={() => openInNewTab("https://www.linkedin.com/in/frederik-imanuel-louis-90668a202/")}>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons onClick={() => openInNewTab("https://www.instagram.com/eriklouiss/")}>
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
