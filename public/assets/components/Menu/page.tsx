"use client";

import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillHome, AiFillFileText } from "react-icons/ai";
import { FaStar, FaStackOverflow, FaTools, FaUserAlt } from "react-icons/fa";
// Importa o CSS
import "./MenuDevice.css";

interface MenuProps {
  isOpenMenu: boolean;
  closeMenu: () => void;
}

// Função para baixar o CV
function baixarCv() {
  location.href =
    "https://drive.google.com/uc?export=download&id=1Kfk9wYxkOFl_2vZbRjM5ZutiQysX4_VZ";
}

function Menu({ isOpenMenu, closeMenu }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Função para detectar cliques fora do menu
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isOpenMenu
      ) {
        closeMenu();
      }
    };

    // Adiciona o evento de clique no documento
    document.addEventListener("mousedown", handleOutsideClick);

    // Limpa o evento ao desmontar o componente
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpenMenu, closeMenu]);

  return (
    <nav
      ref={menuRef}
      className={`nav_device ${isOpenMenu ? "active" : ""}`}
    >
      <div>
        <button className="btn_close" onClick={closeMenu}>
          <span>
            <IoMdClose />
          </span>
        </button>

        <ul className="ul_nav_device">
          <li>
            <a href="#inicio">
              <AiFillHome /> INÍCIO
            </a>
          </li>
          <li>
            <a href="#sobre">
              <AiFillFileText /> SOBRE
            </a>
          </li>
          <li>
            <a href="#eventos">
              <FaStar /> SITE
            </a>
          </li>
          <li>
            <a href="#projetos">
              <FaStackOverflow /> PROJETOS
            </a>
          </li>
          <li>
            <a href="#ferramentas">
              <FaTools /> FERRAMENTAS
            </a>
          </li>
          <li>
            <a href="#contato">
              <FaUserAlt /> CONTATO
            </a>
          </li>
          <button className="btn_cv_device" onClick={baixarCv}>
            <span>Download CV</span>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
