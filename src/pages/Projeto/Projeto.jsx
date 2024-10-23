import "../Projeto/Projeto.css";

function Projeto() {
  return (
    <div id="projetos">
      <div className="projeto">
        <br />
        <br />
        <h2 className="titulo1">Portfolio</h2>
        <br />
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="col mx-auto text-center">
                <p>
                  <h1>Landing Page</h1>
                </p>
                <br />
                <div className="container d-flex align-items-center flex-column">
                  <a href="https://ibb.co/8g4tFZb">
                    <img
                      src="https://i.ibb.co/whrjDm7/rafaelmolinari2019-github-io-academia.png"
                      alt="rafaelmolinari2019-github-io-academia"
                      border="0"
                      height="500"
                      width="300"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="col mx-auto text-center">
                <p>
                  <h1>Site Pessoal</h1>
                </p>

                <a href="https://ibb.co/YyyH5Sc">
                  <img
                    src="https://i.ibb.co/qWWTH8N/rafaelmolinari2019-github-io-portifolio.png"
                    alt="rafaelmolinari2019-github-io-portifolio"
                    border="0"
                    height="500"
                    width="300"
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="col mx-auto text-center">
                <p>
                  <h1>Portfólio</h1>
                </p>

                <a href="https://ibb.co/jV24gnJ">
                  <img
                    src="https://i.ibb.co/0BSJhHs/rafaelmolinari2019-github-io-portfolio-novo-1.png"
                    alt="rafaelmolinari2019-github-io-portfolio-novo-1"
                    border="0"
                    height="500"
                    width="300"
                  />
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Projeto;
