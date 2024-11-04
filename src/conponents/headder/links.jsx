import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Sobre Mim</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><button id="theme-toggle">Trocar Tema</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
