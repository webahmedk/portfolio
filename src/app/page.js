// src/app/page.js
import React from 'react';
import Hero from './sections/hero_section';
import AboutSection from '@/app/sections/about_section';

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <AboutSection detailLevel="short" />
    </div>
  );
};

export default HomePage;