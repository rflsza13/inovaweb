import './Price.css';

function Price() {
    const link = 'https://wa.me/5519971177700?text=';
    const msg = 'Olá, quero mais informações sobre'
  return (
    <div className="Price">
      <div className="price" id="price">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Tabela de Preços</p>
                    <h3>Web Design</h3>
                </div>
                <div className="row">
                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="price-item">
                            <div className="price-header">
                                <div className="price-title">
                                    <h2>Vídeos</h2>
                                </div>
                                <div className="price-prices">
                                    <h2><small>R$</small>75<span>,00</span></h2>
                                </div>
                            </div>
                            <div className="price-body">
                                <div className="price-description">
                                    <ul>
                                        <li><h6>Vídeos informativos</h6></li>
                                        <li>Publicações para mídias Sociais</li>
                                        <li>Publicações para mídias Sociais</li>
                                        <li>Stories para mídias Sociais</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="price-footer">
                                <div className="price-action">
                                    <a className="btn" target="_blank" href={ link + msg + " *Vídeos para redes sociais*"}>Solicite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="price-item featured-item">
                            <div className="price-header">
                                <div className="price-title">
                                    <h2>Imagens</h2>
                                </div>
                                <div className="price-prices">
                                    <h2><small>R$</small>30<span>,00</span></h2>
                                </div>
                            </div>
                            <div className="price-body">
                                <div className="price-description">
                                    <ul>
                                        <li>Logotipos</li>
                                        <li>Publicações para mídias Sociais</li>
                                        <li>Stories para mídias Sociais</li>
                                        <li>Mockups</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="price-footer">
                                <div className="price-action">
                                    <a className="btn" target="_blank" href={ link + msg + " *Imagens para redes sociais*"}>Solicite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="price-item">
                            <div className="price-header">
                                <div className="price-title">
                                    <h2>Animados</h2>
                                </div>
                                <div className="price-prices">
                                    <h2><small>R$</small>50<span>,00</span></h2>
                                </div>
                            </div>
                            <div className="price-body">
                                <div className="price-description">
                                    <ul>
                                        <li><h6>Imagens animadas</h6></li>
                                        <li>Publicações para Facebook</li>
                                        <li>Publicações para Instagram</li>
                                        <li>Stories para mídias Sociais</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="price-footer">
                                <div className="price-action">
                                    <a className="btn" target="_blank" href={ link + msg + " *Imagens Animadas para redes sociais*"}>Solicite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <h3>Desenvolvimento Web</h3>
                </div>
                <div className="row">
                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="price-item">
                            <div className="price-header">
                                <div className="price-prices">
                                    <h5>Taxa de Manutenção:</h5>
                                    <h2><small>R$ </small>150<span> ao mês</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="price-item featured-item">
                            <div className="price-header">
                                <div className="price-title">
                                    <h2>a partir de</h2>
                                </div>
                                <div className="price-prices">
                                    <p></p>
                                    <h2><small>R$</small>500<span>,00</span></h2>
                                </div>
                            </div>
                            <div className="price-body">
                                <div className="price-description">
                                    <ul>
                                        <li>Site Responsivo</li>
                                        <li>100% Customizado</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="price-footer">
                                <div className="price-action">
                                    <a className="btn" target="_blank" href={ link + msg + " *Criação de Websites*"}>Solicite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="price-item">
                            <div className="price-header">
                                <div className="price-prices">
                                    <h5>Já Incluso: </h5>
                                    <br />
                                    <h6> Hospedagem </h6>
                                    <h6> Domínio </h6>
                                    <h6> Manutenção </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <h3>Assistência Técnica</h3>
                </div>
                <div className="row">
                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="price-item">
                            <div className="price-header">
                                <div className="price-title">
                                    <h2>Limpeza</h2>
                                </div>
                                <div className="price-prices">
                                    <p>A partir de</p>
                                    <h2><small>R$</small>30<span>,00</span></h2>
                                </div>
                            </div>
                            <div className="price-body">
                                <div className="price-description">
                                    <ul>
                                        <li>Limpeza interna</li>
                                        <li>Limpeza externa</li>
                                        <li>Troca de Pasta térmica</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="price-footer">
                                <div className="price-action">
                                    <a className="btn" target="_blank" href={ link + msg + " *Limpeza de Computadores e Notebooks*"}>Solicite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="price-item featured-item">
                            <div className="price-header">
                                <div className="price-title">
                                    <h2>Manutenção</h2>
                                </div>
                                <div className="price-prices">
                                    <p>A partir de</p>
                                    <h2><small>R$</small>50<span>,00</span></h2>
                                </div>
                            </div>
                            <div className="price-body">
                                <div className="price-description">
                                    <ul>
                                        <li>Orçamento gratuito</li>
                                        <li>Instalação de Programas</li>
                                        <li>Formatação</li>
                                        <li>Remoção de Vírus</li>
                                        <li>Troca de peças</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="price-footer">
                                <div className="price-action">
                                    <a className="btn" target="_blank" href={ link + msg + " *Manutenção de Computadores e Notebooks*"}>Solicite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="price-item">
                            <div className="price-header">
                                <div className="price-title">
                                    <h2>Montagem</h2>
                                </div>
                                <div className="price-prices">
                                    <p>A partir de</p>
                                    <h2><small>R$</small>150<span>,00</span></h2>
                                </div>
                            </div>
                            <div className="price-body">
                                <div className="price-description">
                                    <ul>
                                        <li>Orçamento Grátis</li>
                                        <li>Seleção de peças</li>
                                        <li>Indicação de Compras</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="price-footer">
                                <div className="price-action">
                                    <a className="btn" target="_blank" href={ link + msg + " *Montagem de PC Gamers*"}>Solicite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Price;