import React from "react";
import './Header.css';
// IMPORT REACT ICONS
import { IoHome } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";
import ColorSwitch from "../Switch/Switch";

function Header() {
  return (
    <section className="container_header  flex items-center justify-center fixed top-1 left-3 h-[10vh] backdrop-blur-lg rounded-lg" role="banner" >
      {/* Logo */}
      <div className="flex items-center justify-center h-full w-[20vw] rounded-lg" role="img" aria-label="Logo da página">
        <img src="/img/logo.png" alt="Logo" aria-hidden="true" className="logo"/> 
      </div>
      {/* Menu Ul */}
      <ul className="flex items-center justify-around w-[80vw] h-full rounded-lg" role="navigation" aria-label="Menu de navegação">
        <li>
          <a href="#inicio" aria-label="Ir para Início">
            <IoHome />
            Início
          </a>
        </li>
        <li>
          <a href="#sobre" aria-label="Ir para Sobre">
            <MdContacts />
            Sobre
          </a>
        </li>
        <li>
          <a href="#habilidades" aria-label="Ir para Habilidades">
            <SiHyperskill />
            Habilidades
          </a>
        </li>
        <li>
          <a href="#projetos" aria-label="Ir para Projetos">
            <GrProjects />
            Projetos
          </a>
        </li>
        <li>
          <a href="#contato" aria-label="Ir para Contato">
            <MdContactMail />
            Contato
          </a>
        </li>
      </ul>
      {/* Switch de Tema */}
      <div className="btn_switch" aria-label="Alternar tema">
        <ColorSwitch />
      </div>
    </section>
  );
}

export default Header;
