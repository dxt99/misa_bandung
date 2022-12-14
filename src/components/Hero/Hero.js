import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Ayo Misa!
        </SectionTitle>
        <SectionText>
       text inspiratif
        </SectionText>
        <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='#jadwal';
      }}>Jadwal Misa</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;