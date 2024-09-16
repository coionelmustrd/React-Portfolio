import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header>
      <h1>Samuel Pedroza</h1>
      <nav>
        <ul>
          <li>
            <Link 
              to="#about-me"
              onClick={() => setCurrentSection('about-me')}
              className={currentSection === 'about-me' ? 'active' : ''}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link 
              to="#portfolio"
              onClick={() => setCurrentSection('portfolio')}
              className={currentSection === 'portfolio' ? 'active' : ''}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to="#contact"
              onClick={() => setCurrentSection('contact')}
              className={currentSection === 'contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="#resume"
              onClick={() => setCurrentSection('resume')}
              className={currentSection === 'resume' ? 'active' : ''}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
