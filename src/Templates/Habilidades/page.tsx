// IMPORT CSS
import "./Habilidades.css";
// IMPORT REACT ICONS
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
  SiVite,
  SiNextdotjs,
  SiFigma,
  SiGreensock,
} from "react-icons/si";
import { GiMagicLamp } from "react-icons/gi";
import { MdOutlineStyle } from "react-icons/md";
import React from "react";

function Habilidades() {
  const items = [
    { id: 1, title: "React", img: <FaReact className="icon" /> },
    { id: 2, title: "HTML5", img: <FaHtml5 className="icon" /> },
    { id: 3, title: "CSS3", img: <FaCss3Alt className="icon" /> },
    { id: 4, title: "JavaScript", img: <FaJs className="icon" /> },
    { id: 5, title: "TypeScript", img: <SiTypescript className="icon" /> },
    { id: 6, title: "Node.js", img: <FaNodeJs className="icon" /> },
    { id: 7, title: "Git", img: <FaGitAlt className="icon" /> },
    { id: 8, title: "Tailwind CSS", img: <SiTailwindcss className="icon" /> },
    { id: 9, title: "Bootstrap", img: <SiBootstrap className="icon" /> },
    { id: 10, title: "SQL", img: <SiPostgresql className="icon" /> },
    { id: 11, title: "Vite", img: <SiVite className="icon" /> },
    { id: 12, title: "Next.js", img: <SiNextdotjs className="icon" /> },
    { id: 13, title: "Magic UI", img: <GiMagicLamp className="icon" /> },
    { id: 14, title: "AOS", img: <MdOutlineStyle className="icon" /> },
    { id: 15, title: "Figma", img: <SiFigma className="icon" /> },
    { id: 16, title: "GSAP", img: <SiGreensock className="icon" /> },
  ];

  return (
    <>
      <section className=" w-screen h-screen" id="habilidades" >
        <h1 data-aos="fade-up"
     data-aos-duration="1000">Ferramentas e Tecnologias:</h1>
        {/* card 1 */}
        <main className=" w-[55vw] h-[85%] flex flex-wrap justify-center items-center " data-aos="fade-up"
     data-aos-duration="1000">
          {items.map((item) => (
            <div
              key={item.id}
              className="list_items flex flex-col items-center"
            >
              <div className="icon-container">{item.img}</div>
              <p className="title">{item.title}</p>
            </div>
          ))}
        </main>
      </section>
    </>
  );
}

export default Habilidades;
