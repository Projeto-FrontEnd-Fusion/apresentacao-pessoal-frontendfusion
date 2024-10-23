import "./Header.css"

function Header() {
  return (
    <nav
      className="navegar"
    >
      <div className="container">
        <div className="navbarResponsive">
          <ul className="row">
            <li className="col-md-4">
              <a className="menu_1" href="#projetos">
                Portfolio
              </a>
            </li>
            <li className="col-md-4">
              <a className="menu_1" href="#skills">
                Habilidades
              </a>
            </li>
            <li className="col-md-4">
              <a className="menu_1" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
