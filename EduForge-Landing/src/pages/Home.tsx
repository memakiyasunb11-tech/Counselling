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

const Home: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen relative font-sans">
      <TopBar />
      <Hero />
      <Problems />
      <Mentor />
      <Curriculum />
      <Bonuses />
      <FAQ />
      <FinalCTA />
      <BottomCTA />
    </div>
  );
};

export default Home;
