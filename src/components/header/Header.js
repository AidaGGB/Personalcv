import './Header.css';
import foto from './fotoperfil.jpg'




function Header() {
    return (
      <div>
        <header className="header">
          <div className="foto">
              <img src={foto} alt="foto" className="img-fluid"/>
              <div className="contacto">
                <p><i class="fas fa-phone"></i>  +57 (1) 301 638 84 57</p>
                <div className="link">
                  <a href="https://www.linkedin.com/in/aida-garzon-9972989a/" className="link" target="_blank"><i class="fab fa-linkedin"></i>  www.linkedin.com/in/<br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aida-garzon-9972989a/</a>
                </div>
                <p><i class="fas fa-envelope"></i>   a.garzonbe@gmail.com</p>
              </div> 
          </div>

          <div className="texto">
                <h1>Aida</h1>
                <h1>Garzón</h1>
                <h4>Desarrollador Junior, Web Front-end </h4>
                <div className="acerca">
                  <h2>ACERCA DE MI</h2>
                  <p>Desarrollador Junior, en desarrollo web Front-End  profesional en salud, experiencia en áreas de administrativas, de gestión y asesoría de calidad, verificador de condiciones de habilitación, experiencia en capacitación y entrenamiento laboral.<br></br>
                  <br></br>Activa, amigable, honesta, responsable, con buena atención al cliente y buenas relaciones interpersonales. 
                </p>
                </div>
                
            </div>
        </header>
      </div>
    );
  }
  
  export default Header;
  