
import React from 'react';
import { Link } from 'react-router-dom';

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
          <li><Link to="/">Sobre Mim</Link></li>
          <li><Link to="/prj">Projetos</Link></li>
          <li><Link to="/cnt">Contato</Link></li>
          <li><button id="theme-toggle" onClick={toggleTheme}>Trocar Tema</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

