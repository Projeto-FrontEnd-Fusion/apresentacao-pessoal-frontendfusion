import React from "react";
import "./Home.css";
// IMPORT REACT ICONS
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Home() {
  return (
    <section className="w-screen h-screen flex justify-around container_home" id="inicio" role="main" >
      
      {/* Conteúdo Card 1 */}
      <main className="w-screen h-screen items-center justify-center">
        <div className="container_title h-[25vh] flex-row-reverse">
          <p>Olá eu sou <FaReact className="icon_react"/></p>
          <h1>Erivelton Magalhães</h1>
          <span>Desenvolvedor front end com mais de 1 ano de experiência.</span>
        
        </div>
        <div className="container_social">
        
          <button className="button_contact" aria-label="Entrar em contato">
            <a href="https://api.whatsapp.com/send?phone=5561981579569&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!">Entre em contato</a>
          </button>
          <div className="flex">
            <a href="https://api.whatsapp.com/send?phone=5561981579569&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!" aria-label="Entrar em contato via WhatsApp">
              <FaWhatsappSquare />
            </a>
            <a href="https://www.linkedin.com/in/erivelton-magalh%C3%A3es-553a6b215/" aria-label="Ver perfil no LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/EriveltonMGit/EriveltonMGit" aria-label="Ver perfil no GitHub">
              <FaGithubSquare />
            </a>
            <a href="https://web-desing-page.netlify.app/" aria-label="Ver site do desenvolvedor">
              <FaSitemap />
            </a>
          </div>
        </div>
        {/* Imagem do desktop */}
        <img
          className="img_per"
          src="/img/bk-img.webp"
          alt="Imagem de fundo do perfil de Erivelton Magalhães"
        />
          <img
          className="img_per_2"
          src="img/bk-img_2.webp"
          alt="Imagem de fundo do perfil de Erivelton Magalhães"
        />
      </main>
    </section>
  );
}

export default Home;
