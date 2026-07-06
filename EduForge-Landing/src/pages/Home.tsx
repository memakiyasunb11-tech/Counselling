import React from 'react';
import TopBar from '../components/funnel/TopBar';
import Hero from '../components/funnel/Hero';
import Problems from '../components/funnel/Problems';
import Mentor from '../components/funnel/Mentor';
import Curriculum from '../components/funnel/Curriculum';
import Bonuses from '../components/funnel/Bonuses';
import FAQ from '../components/funnel/FAQ';
import FinalCTA from '../components/funnel/FinalCTA';
import BottomCTA from '../components/funnel/BottomCTA';
import AnimatedBackground from '../components/layout/AnimatedBackground';
import KeyBenefits from '../components/layout/KeyBenefits';

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative font-sans overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <TopBar />
        <Hero />
        <Problems />
        <Mentor />
        <Curriculum />
        <Bonuses />
        <KeyBenefits />
        <FAQ />
        <FinalCTA />
        <BottomCTA />
      </div>
    </div>
  );
};

export default Home;
