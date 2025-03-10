import './Hero.css';
import hero from './img/hero.png';
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="Hero">
        <div className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h3 className="text-light">Serviços especializados em:</h3>
                                <h3 className="text-light">
                                    <ReactTyped 
                                        strings={[
                                            "Web Design",
                                            "Desenvolvimento Web",
                                            "Manutenção de Computadores",
                                            "Manutenção de Notebooks",
                                            "Montagem de Computadores"
                                            ]} 
                                        typeSpeed={40}
                                        backSpeed={50}
                                        loop 
                                    />
                                </h3>
                            </div>
                            <div className="hero-btn">
                                <a className="btn nav-link" href="#contact">Fale conosco</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src={ hero } alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;