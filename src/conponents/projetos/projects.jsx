import React from 'react';
import data from '../../data/projects.json'

const Projetos = () => {
  return (
    <section id="projetos">
      <h2>Projetos</h2>
      {/* Mapeando os projetos do JSON */}
      {data.map((projeto, index) => (
        <div className="projeto" key={index}>
          <h3>{projeto.name_project}</h3>
          <p>{projeto.description}</p>
          {/* Condicionalmente renderizando um link ou imagem */}
          {projeto.is_img ? (
            <img src={projeto.link} alt={projeto.name_project} />
          ) : (
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projetos;
