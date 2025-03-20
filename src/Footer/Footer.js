import './Footer.css';

let telefone = "(19) 97117-7700";
let email = "";
let facebook = "#";
let instagram = "#";
let linkedin = "#";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info text-light">
                        <h3>InovaWeb Tecnologia</h3>
                        <h5>Rua Sinharinha Frota, 55</h5>
                        <h6>Centro - Capivari / SP</h6>
                        <div className='telefone'>
                            <i className="fab fa-whatsapp"></i>
                            <h6>{ telefone }</h6>
                        </div>
                        {/* <div className="footer-social">
                            <a href={ facebook }><i className="fab fa-facebook-f"></i></a>
                            <a href={ instagram }><i className="fab fa-instagram"></i></a>
                            <a href={ linkedin }><i className="fab fa-linkedin-in"></i></a>
                        </div> */}
                    </div>
                </div>
                <div className="container copyright">
                    <p><a href="#">InovaWeb® </a>, All Right Reserved | Designed By UrusianX</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;