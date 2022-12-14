import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Jadwal Misa Bandung';
  }, []);
  return ( // <Acomplishments />
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Timeline />
    </Layout>
  );
};

export default Home;
