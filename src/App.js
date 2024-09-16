import React, { useState } from 'react';
import Header from '/components/Header';
import Footer from '/components/Footer';
import AboutMe from '/components/AboutMe';
import Portfolio from '/components/Portfolio';
import Contact from '/components/Contact';
import Resume from '/components/Resume';
import './styles.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('about-me');

  return (
    <div>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
