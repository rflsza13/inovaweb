import './Footer.css';

let telefone = "(19) 9 8990-5823";
let email = "rafaelrodriguessouza10@gmail.com";
let facebook = "#";
let instagram = "#";
let linkedin = "#";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <h3>InovaWeb</h3>
                        <h5 className='text-light'>Rua Sinharinha Frota, 55 - Centro</h5>
                        <div className="footer-menu">
                            <p>{ telefone }</p>
                            <p>{ email }</p>
                        </div>
                        <div className="footer-social">
                            <a href={ facebook }><i className="fab fa-facebook-f"></i></a>
                            <a href={ instagram }><i className="fab fa-instagram"></i></a>
                            <a href={ linkedin }><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; <a href="#">InovaWeb®</a>, All Right Reserved | Designed By UrusianX</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;