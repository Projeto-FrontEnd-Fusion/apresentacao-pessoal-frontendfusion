import React from "react";
import "./Sobre.css";

function Sobre() {
  return (
    <>
      <section
        className="container_sobre w-screen h-screen flex justify-around  "
        id="sobre"
      >
        {/* card 1 */}
        <main
          className="w-[50vw]  card_sobre flex-col-reverse"
         
        >
          <h1  data-aos="fade-up"
          data-aos-duration="1000">Sobre:</h1>
          <p  data-aos="fade-up"
          data-aos-duration="1000">
            Formado em Análise e Desenvolvimento de Sistemas, sou desenvolvedor
            Front-end com certificação em Desenvolvedor Full Stack e Google
            Cloud Computing. Atualmente, estou expandindo meus conhecimentos
            cursando Ciência da Computação. Minha paixão por tecnologia e design
            me capacita a criar soluções eficientes, inovadoras e visualmente
            atraentes, com foco em performance e usabilidade.
          </p>
          <p  data-aos="fade-up"
          data-aos-duration="1000">
            Tenho experiência prática com ferramentas como Angular e React, e
            estou sempre explorando novas tecnologias e tendências para otimizar
            meus projetos, proporcionando uma experiência de usuário envolvente
            e intuitiva.
          </p>
        </main>
        {/* Card 2 */}
        <main
          className="card_perfil"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="/img/foto.webp" alt="" />
        </main>
      </section>
    </>
  );
}

export default Sobre;
