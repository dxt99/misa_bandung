import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+62895800433456">+62895800433456</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:13520163@std.stei.itb.ac.id">
            13520163@std.stei.itb.ac.id
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons onClick={() => openInNewTab("https://github.com/dxt99")}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons onClick={() => openInNewTab("https://www.linkedin.com/in/frederik-imanuel-louis-90668a202/")}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons onClick={() => openInNewTab("https://www.instagram.com/eriklouiss/")}>
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
