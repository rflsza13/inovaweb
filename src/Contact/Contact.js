import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <div className="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
            <div className="container-fluid">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                    <div className="control-group">
                                        <input type="text" className="form-control" id="name" placeholder="Seu Nome" required="required" data-validation-required-message="Please enter your name" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control" id="email" placeholder="Seu Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control" id="subject" placeholder="Assunto" required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" id="message" placeholder="Mensagem" required="required" data-validation-required-message="Please enter your message"></textarea>
                                        <p className="help-block"></p>
                                    </div>
                                    <div>
                                        <button className="btn" type="submit" id="sendMessageButton">Enviar Mensagem</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;