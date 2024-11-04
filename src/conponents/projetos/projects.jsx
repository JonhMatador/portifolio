import React from 'react';

const Projetos = () => {
  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <div className="projeto">
        <h3>Projeto 1</h3>
        <p>Descrição do projeto 1.</p>
        <a href="link-do-projeto-1">Ver Projeto</a>
      </div>
      <div className="projeto">
        <h3>Projeto 2</h3>
        <p>Descrição do projeto 2.</p>
        <a href="link-do-projeto-2">Ver Projeto</a>
      </div>
      {/* Adicione mais projetos conforme necessário */}
    </section>
  );
};

export default Projetos;
