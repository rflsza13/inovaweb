import './Contact.css';
import { useState } from "react";

function Contact() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [msg, setMsg] = useState('')

    function limpaCampos(){
        setNome('');
        setEmail('');
        setAssunto('');
        setMsg('');
    }

    const enviarMensagem = (event) => {
        event.preventDefault();
        var url = "https://wa.me/5519989905823?text=" // Seu numero
            + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
            + "%0a" // Quebra de linha
            + "*Nome*: " + nome + "%0a" // Dados do formulário
            + "*E-mail*: " + email + "%0a"
            + "*Assunto*: " + assunto + "%0a"
            + "*Mensagem*: " + msg;
        console.log("url: ", url)
        try{
            limpaCampos();
            window.open(url, '_blank');
        } catch {
            alert("Mensagem não enviada");
        }
    }

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
                                    <form name="sentMessage" id="contactForm" method="get" onSubmit={ enviarMensagem }>
                                        <div className="control-group">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="name" 
                                                placeholder="Seu Nome"
                                                value={ nome } 
                                                onChange={(e) => setNome(e.target.value)}  
                                                required="required" 
                                                data-validation-required-message="Por favor, informe seu nome" />
                                            <p className="help-block"></p>
                                        </div>
                                        <div className="control-group">
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="Seu Email"
                                                value={ email } 
                                                onChange={(e) => setEmail(e.target.value)} 
                                                required="required" 
                                                data-validation-required-message="Por favor, informe seu email" />
                                            <p className="help-block"></p>
                                        </div>
                                        <div className="control-group">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="subject" 
                                                placeholder="Assunto" 
                                                value={ assunto } 
                                                onChange={(e) => setAssunto(e.target.value)} 
                                                required="required" 
                                                data-validation-required-message="Por favor, informe o assunto" />
                                            <p className="help-block"></p>
                                        </div>
                                        <div className="control-group">
                                            <textarea 
                                                className="form-control" 
                                                id="message" 
                                                placeholder="Mensagem"
                                                value={ msg } 
                                                onChange={(e) => setMsg(e.target.value)}  
                                                required="required" 
                                                data-validation-required-message="Por favor, informe a mensagem"></textarea>
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