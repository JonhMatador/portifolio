
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/links.json'

function Header() {
  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.toggle('dark-theme'));
  };

  return (
    <header>
      <nav>
        <ul>
          {data.map((i, index) => (
            <li key={i}>
              <Link to={i.path}>{i.description}</Link>
            </li>
          ))}
          <li><button id="theme-toggle" onClick={toggleTheme}>Trocar Tema</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

