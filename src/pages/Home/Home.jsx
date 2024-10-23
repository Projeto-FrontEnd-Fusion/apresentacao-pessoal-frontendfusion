import "../Home/home.css";

function Home() {
  return (
    < >
      <header className="masthead bg-primary text-white text-center" id="corpo">
        <div className="container d-flex align-items-center flex-column">

        <img className="masthead-avatar mb-4" id="foto" src="https://i.ibb.co/48Shs6d/Whats-App-Image-2024-10-13-at-17-39-20.jpg" alt="Whats-App-Image-2024-10-13-at-17-39-20" border="0"></img>
          <br />
          <h1 className="masthead-heading text-uppercase mb-0">
            Rafael Molinari
          </h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <br />
          <p className="masthead-subheading font-weight-light mb-0" id="texto_2">
            Sou apaixonado com tecnoligia, a possibilidade de criar algo que possa ajudar a mudar a vida das pessoas
            me estimula a não desistir mesmo passando por momentos dificeis!

            Falando um pouco sobre mim, iniciei minha caminhada na programação fazendo algunas cursos livres onde me certifiquei em Desenvolvimento Web,
            utilizando HTML, CSS, Javascript, PHP, MySQL... Após decidir em realizar uma formação superior, dessa forma, cursei Análise e Desenvolvimento de Sistemas pela faculdade UniDomBosco, concluíndo o curso
            em Junho/2022, desde então estou em processo de transição de carreira. Atualmente estou realizando uma pós-graduação em Governança
            e Gestão da Tecnologia da Informação e o curso de React.Js do básico ao avançado, buscando amplicar mais o meu conhecimento e a melhoria contínua. 
          </p>
          <br /><br />
          <p className="masthead-subheading font-weight-light mb-0" id="texto_2">
          Comecei a minha carreira na Tecnologia iniciou-se em 2010, quando realizei o curso de Montagem e Manutenção de Computadores projeto social da época
          que abriu portas para várias pessoas. Nesse mesmo ano abri o meu MEI com sonho de trabalhar com o que amo!   
          </p>
        </div>
      </header>
    </>
  );
}

export default Home;
