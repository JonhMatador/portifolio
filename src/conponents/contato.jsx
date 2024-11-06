import React from 'react';

const Contato = () => {
  return (
    <section id="contato">
      <h2>Contato</h2>
      <form>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <p>Ou me encontre nas redes sociais: [links]</p>
    </section>
  );
};

export default Contato;
