import './About.css';
import image from './img/about.jpg'

function About() {
  return (
    <div className="About">
      <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-img">
                            <img src={ image } alt="Image"/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="section-header text-bottom">
                                <p>Um pouco sobre nós</p>
                            </div>
                            <div class="about-text">
                                <p>
                                    Transformamos ideias em inovação digital! 🚀 <br />
                                    Criamos sites modernos, identidades visuais marcantes e publicações estratégicas para mídias sociais. <br />
                                    Além disso, oferecemos manutenção especializada para computadores e notebooks, além de montagem personalizada de PCs peça por peça. <br />
                                    Conecte-se ao futuro com a gente!"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;