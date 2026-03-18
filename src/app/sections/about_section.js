import React from 'react';

function AboutSection({ detailLevel }) {
  if (detailLevel === 'short') {
    return (
      <section>
        <p>Hi, I’m Khalid, a developer based in XYZ. I build full-stack web applications.</p>
      </section>
    );
  } else {
    return (
      <section>
        <p>Hi, I’m Khalid, and this is my full story. I grew up in XYZ, started coding at 16, and pursued computer science at ABC University. I’ve worked on projects like X, Y, Z, and I’m passionate about scalable web solutions.</p>
      </section>
    );
  }
}

export default AboutSection;