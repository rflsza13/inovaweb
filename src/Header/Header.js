import './Header.css';
import '../App/section.css';
import logo from './img/logo.png';

function Header() {
  return (
    <div className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
            <a href="index.html" className="navbar-brand">
                <img src={ logo } alt="logo"/>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ml-auto">
                    <a href="#home" className="nav-item nav-link active">Início</a>
                    <a href="#about" className="nav-item nav-link">Sobre</a>
                    <a href="#service" className="nav-item nav-link">Serviços</a>
                    <a href="#price" className="nav-item nav-link">Preços</a>
                    <a href="#contact" className="nav-item nav-link">Contato</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;