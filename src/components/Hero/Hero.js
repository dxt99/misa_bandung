import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Ayo Ikut Misa!
        </SectionTitle>
        <SectionText>
        Matius 18:20: "Sebab di mana dua atau tiga orang berkumpul dalam nama-Ku, di situ Aku ada di tengah-tengah mereka." <br/> <br/>
        Marilah kita kembali berkumpul di rumah Tuhan!
        </SectionText>
        <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='#jadwal';
      }}>Lihat Jadwal Misa</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;