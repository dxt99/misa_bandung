import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Projects = () => (
  <Section nopadding id="jadwal">
    <SectionDivider />
    <SectionTitle main>Jadwal Misa</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            
            {p.tags.map((t, i) => {
                  return <CardInfo key={i}>{t}</CardInfo>;
            })}
            <CardInfo key='Alamat'>{p.description}</CardInfo>
            <UtilityList>
              <ExternalLinks onClick={() => openInNewTab(p.source)}>Google Maps</ExternalLinks>
              <ExternalLinks onClick={() => openInNewTab(p.visit)}>Hubungi</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;