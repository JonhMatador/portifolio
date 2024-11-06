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
      <p>Ou me encontre nas redes sociais: [<a href='https://br.linkedin.com/in/samuel-henrique-morais-vitrio-8446a52a2'>Likedin</a>]</p>
    </section>
  );
};

export default Contato;
