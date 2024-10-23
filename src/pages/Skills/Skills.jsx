import "../Skills/Skills.css";

function Skills() {
  return (
    <div id="skills">
        <div className="skills">
      <div className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Habilidades
          </h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div><br /><br /><br />
            <div className="divider-custom-line"></div>
          </div><br /><br />
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Noções de PHP</li>
                <li>MySQL</li>
                <li>Bootstrap</li>
                <li>CodeIgniter</li>
              </p>
            </div>
            <div className="col-lg-1 ms-auto">
            </div>
            <div className="col-lg-4 me-auto" id="hab"> 
              <p className="lead">
                <li>Cotação e contratação de produtos e serviços</li>
                <li>Estruturação e instalação de redes</li>
                <li>Manutenção preventiva e corretiva de Micro computadores e notebooks</li>
                <li>Montagem de Micro computadores</li>
                <li>Instalação de roteadores e switchs</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Skills;
