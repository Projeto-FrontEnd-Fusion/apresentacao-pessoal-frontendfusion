import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineTeam } from 'react-icons/ai';

import "./Footer.css";
import React from 'react';

export default function Footer() {
  return (
    <section className="section_5" id='contato' >
      <footer id="contato" className="footer" data-aos="fade-up"
     data-aos-duration="1000">
        <div className="container">
          {/* Sobre */}
          <div className="footerColumn" >
            <h5 className="footerTitle">Sobre</h5>
            <p className="footerText">
              Ofereço serviços de alta qualidade com foco em atender as
              necessidades dos clientes em todas as fases do projeto.
            </p>
          </div>

          {/* Serviços */}
          <div className="footerColumn" >
            <h5 className="footerTitle">Serviços</h5>
            <ul className="footerList">
              <li>
                <a href="#!">
                  <AiOutlineTeam /> Consultoria
                </a>
              </li>
              <li>
                <a href="#!">
                  <BiMenuAltRight /> Desenvolvimento
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaPhoneAlt /> Suporte
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaLinkedin /> Treinamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="footerColumn">
            <h5 className="footerTitle">Contato</h5>
            <ul className="footerList">
              <li><a href="https://api.whatsapp.com/send?phone=5561981579569&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></li>
              <li>
                <a href="mailto:email@example.com">
                  <FaEnvelope /> Email: Acesse
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaPhoneAlt /> Contato
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/Fy5hP6F9agGcPBGW9" target="_blank" rel="noopener noreferrer">
                  <FaMapMarkerAlt /> DF - Brasília
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="footerColumn">
            <h5 className="footerTitle">Siga-me</h5>
            <div className="socialLinks">
              <img src="/img/qrcode.jpg" alt="QR Code" />
              <div className="div_icons">
                <a href="https://api.whatsapp.com/send?phone=5561981579569&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
                <a href="https://github.com/EriveltonMGit/EriveltonMGit" className="socialIcon" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/erivelton-magalh%C3%A3es-553a6b215/" className="socialIcon" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/erivelton_magalhaes/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2024 Copyright: Todos os direitos reservados.</p>
        </div>
      </footer>
    </section>
  );
}
