import { useState, useEffect } from "react";
import { AiFillHome, AiFillFileText } from "react-icons/ai";
import { FaStar, FaStackOverflow, FaTools, FaUserAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import './Nav_device.css';
import Menu from "../../assets/components/Menu/page";
import ColorSwitch from "../../assets/components/Switch/Switch";


export default function Nav() {
// FUNÇÃO PARA ABIR O MENU DEVICE
const [openMenu, setOpenMenu] = useState (false)




  // Estado para controlar a visibilidade da nav
  const [navVisible, setNavVisible] = useState(false);

  // Hook para monitorar a rolagem
  useEffect(() => {
    const handleScroll = () => {
      // Verifica a porcentagem de rolagem da página
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // Atualiza o estado da nav baseado na rolagem
      if (scrollPercentage > 1) {
        setNavVisible(true);  
      } else {
        setNavVisible(false); 
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpeza do evento de scroll
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Função para baixar o CV
  function baixarCv() {
    location.href = "https://drive.google.com/uc?export=download&id=1Kfk9wYxkOFl_2vZbRjM5ZutiQysX4_VZ";
  }

  return (
  <>
    <section className={`nav_bar ${navVisible ? "visible" : ""}`}>
      <main className="logo">
       <a href="https://web-desing-page.netlify.app/">
         <img src="/img/logo.png" alt="Logo" />
       </a>
      </main>

      <ul className="ul_nav">
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
        <button className="btn_cv" onClick={baixarCv}>
          <span>Download CV</span>
        </button>
      </ul>
    
      <button className="btn_menu_device" onClick={()=>setOpenMenu(!openMenu)}>
        <span>
          <RxHamburgerMenu />
        </span>
      </button>
      

    </section>
    <Menu  isOpenMenu={openMenu} closeMenu={()=> setOpenMenu(false)}>

      </Menu>
    <div className="switch_device">
    <ColorSwitch/>
    </div>
    </>
  );
}
