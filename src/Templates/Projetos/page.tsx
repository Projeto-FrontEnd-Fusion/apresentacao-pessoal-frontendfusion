// IMPORT CSS
import React from "react";
import "./Projetos.css";

function Projetos() {
  const ittemsProjects = [
    {
      id: 1,
      name: "Digital Dream",
      image: "/img/projetos/img_1.webp",
      description:
        "Web Design Page é uma página moderna e criativa que destaca soluções em design e desenvolvimento web. Com um layout minimalista e interativo, o site foi projetado para apresentar serviços, portfólios e ideias inovadoras de forma clara e atrativa. Ideal para profissionais e empresas que buscam inspiração ou desejam criar experiências digitais impactantes.",
      site: "https://web-desing-page.netlify.app/",
      project: "",
    },
    {
      id: 2,
      name: "Digital Comerce",
      image: "/img/projetos/img_2.webp",
      description:
        "Digital Commerce é uma plataforma de comércio eletrônico intuitiva e moderna, projetada para oferecer uma experiência de compra eficiente e agradável. Com uma interface limpa, recursos interativos e navegação simplificada, o site é ideal para explorar e adquirir produtos de forma rápida e segura. Uma solução perfeita para quem busca praticidade no mundo digital.",
      site: "https://digital-comerce.netlify.app/",
      project: "",
    },
    {
      id: 3,
      name: "Hamburgueria do Chef",
      image: "/img/projetos/img_3.webp",
      description:
        "Hamburgueria do Chef é um site que traz o melhor da experiência gourmet diretamente para você. Com um design atrativo e apetite visual, o site apresenta um menu exclusivo de hambúrgueres artesanais, combinando sabores únicos e ingredientes de alta qualidade. Ideal para quem aprecia uma refeição deliciosa e uma experiência online fácil e prática.",
      site: "https://hamburgueria-do-chef.netlify.app/",
      project: "https://github.com/EriveltonMGit/Burger_grill",
    },
    {
      id: 4,
      name: "Web Designer",
      image: "/img/projetos/img_4.webp",
      description:
        " Web Designer é um projeto criativo e sereno, projetado para destacar o trabalho de um designer especializado em experiências digitais elegantes e funcionais. Com um visual minimalista e uma navegação fluida, o site reflete o equilíbrio entre criatividade e usabilidade, ideal para quem busca inspiração ou deseja contratar serviços de design web de alta qualidade.",
      site: "https://calm-web-designer.netlify.app/",
      project: "https://github.com/EriveltonMGit/Web_designer",
    },
    {
        id: 5,
        name: "Desafio FronEnd Fusion",
        image: "/img/projetos/img_6.png",
        description:
          "Este projeto é um formulário de cadastro desenvolvido com **React**, voltado para o **Desafio Frontend Fusion**. O objetivo é proporcionar uma experiência simples e intuitiva para que os usuários possam se cadastrar no desafio. Os dados dos formulários são validados e armazenados no **Local Storage**, garantindo funcionalidade e usabilidade.  ",
        site: "https://desafio-frontend-fusion.netlify.app/",
        project:
          "https://github.com/EriveltonMGit/desafio-formulario-com-validacao-frontend/tree/Erivelton-Magalhaes",
      },
    {
      id: 6,
      name: "Projeto Front Fusion Apresentação",
      image: "/img/projetos/img.webp",
      description:
        " Projeto Front Fusion Apresentação é uma plataforma web moderna e responsiva, desenvolvida com foco em boas práticas de desenvolvimento e código limpo. O objetivo principal é oferecer um ambiente prático, acessível e intuitivo que demonstram as minhas habilidades em desenvolvimento web. Este projeto reflete minha experiência como desenvolvedor Full Stack e designer UX/UI, com ênfase na criação de soluções eficientes e inovadoras.",
      site: "https://codigo-certo.netlify.app/",
      project: "https://github.com/EriveltonMGit/Codigo_certo",
    },
   
   
  ];

  return (
    <>

    <section className="flex container_projetos" id="projetos" >
        <h1>Projetos:</h1>
    <main>
    {ittemsProjects.map((item) => (
        <div key={item.id} className="body_project button-custom " data-aos="fade-up"
        data-aos-duration="1000">
          <p className="name" data-aos="fade-up"
     data-aos-duration="1000">{item.name}</p>
          <img className="img_project" src={item.image} alt={item.name} />
          <span className="descricao">{item.description}</span>
          {item.site && (
            <a
              href={item.site}
              className="site_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visite o site
            </a>
          )}
          {item.project && (
            <a
              href={item.project}
              className="project_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projeto
            </a>
          )}
        </div>
      ))}  
    </main>
    </section>
      
    </>
  );
}

export default Projetos;
