// src/app/about/page.js
import React from 'react';
import AboutSection from '@/app/sections/about_section';

const AboutPage = () => {
  return (
    <div>
      <AboutSection detailLevel="full" />
    </div>
  );
};

export default AboutPage;