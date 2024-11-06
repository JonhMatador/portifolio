import React from 'react';
import data from '../data/sobre_min.json'

function Sobre(){
  return (
    <section id="sobre">
      <h2>Sobre Mim</h2>
      <img src={data.link_image} alt="Minha Foto" />
      <p>{data.details}</p>
    </section>
  );
};

export default Sobre;
