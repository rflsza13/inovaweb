import './Service.css';

function Service() {
  return (
    <div className="Services">
      <div className="service" id="service">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>O que fazemos</p>
                    <h2>Nossos Serviços de Qualidade</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-file-image" aria-hidden="true"></i>
                            </div>
                            <div className="service-text">
                                <h3>Web Design</h3>
                                <p>
                                    Criação de Logos e publicações para mídias sociais diversas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-code"></i>
                            </div>
                            <div className="service-text">
                                <h3>Desenvolvimento Web</h3>
                                <p>
                                    Criação de Sites responsivos para uso pessoal ou empresarial.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-wrench" aria-hidden="true"></i>
                            </div>
                            <div className="service-text">
                                <h3>Assistência Técnica</h3>
                                <p>
                                    Limpeza e Manutenção completa de Computadores e Notebooks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-desktop" aria-hidden="true"></i>
                            </div>
                            <div className="service-text">
                                <h3>Montagem de Computador Gamer</h3>
                                <p>
                                    Orçamento e montagem de computadores, peça por peça, para obter o melhor desempenho.
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

export default Service;