import './Bodycv.css';
import icons from './Softwareicons.jpg';
import Header from '../header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Bodycv () {
    return (
        <div>
            <Header/>
            <div className="bodycv">
                <section className="experienciacv">
                    <div>
                        <h2>EXPERIENCIA</h2>
                        <ul>
                            <div className="datos">
                                <li><h5>COORDINADOR DE CALIDAD</h5>
                                    <h6>Organización Medico Odontológica Nacional Integrada</h6>
                                    <h6>OMNISALUD S.A</h6>
                                    <p>Junio de 2017 - Marzo de 2020</p>
                                </li>
                            </div>

                            <div className="datos">
                                <li><h5>COORDINADOR DE CALIDAD</h5>
                                    <h6>Laboratorio Clínico Diagnóstico</h6>
                                    <h6>ANA MARIA VOLLERT LTDA</h6> 
                                    <p>Abril de 2015 - Diciembre de 2020</p>
                                </li>
                            </div>

                            <div className="datos">
                                <li><h5>ASESOR DE CALIDAD</h5>
                                    <h6>Laboratorio Clínico Diagnóstico</h6>
                                    <h6>DRA. MARIA CLEMENCIA RODRIGUEZ </h6> 
                                    <p>Enero de 2018 - Agosto de 2018</p>
                                </li>
                            </div>
                            <div className="ruta">
                                <li  type="none"><Link to="/contenido" className="boton"><i class="fas fa-plus"></i>Más Info</Link>
                                </li>
                            </div>
                        </ul>
                        
                        <h2>FORMACIÓN</h2>
                        <ul>
                            <div className="datos">
                                <li><h5>TÉCNICO EN DESARROLLO WEB FRONT-END</h5>
                                    <h6>KUEPA PROGRAMA TECH-POWER</h6>
                                    <h6>BOGOTÁ, COLOMBIA</h6>
                                    <p>En curso</p>
                                </li>
                            </div>

                            <div className="datos">
                                <li><h5>GERENCIA DE LA CALIDAD EN SALUD</h5>
                                    <h6>UNIVERSIDAD EL BOSQUE</h6>
                                    <h6>BOGOTÁ, COLOMBIA</h6>
                                    <p>Marzo de 2014</p>
                                </li>
                            </div>

                            <div className="datos">
                                <li><h5>BACTERIÓLOGA LABORATORIOSTA CLÍNICO</h5>
                                    <h6>UNIVERSIDAD COLEGIO MAYOR DE CUNDINAMARCA </h6>
                                    <h6>BOGOTÁ, COLOMBIA</h6>
                                    <p>Enero de 2002</p>
                                </li>
                            </div>
                            <div className="ruta">
                                <li type="none"><Link to="/contenido" className="boton" ><i class="fas fa-plus"></i>Más Info</Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </section>
                <section className="sec2">
                    <div  className="habilidades" >
                        <h3>-----  HABILIDADES  -----</h3>
                        <div className="info">Organización <progress max="100" value="90"> </progress></div>
                        <div className="info">Liderazgo <progress max="100" value="80"> </progress></div>
                        <div className="info">Planeación<progress max="100" value="90"> </progress></div>
                        <div className="info">Servicio al Cliente<progress max="100" value="80"> </progress></div>
                        <div className="info">Resolucion conflictos<progress max="100" value="80"> </progress></div>
                    </div>

                    <div  className="habilidades" >
                        <h3>-----   SOFTWARE   -----</h3>
                        <img src={icons} alt="software"/>
                    </div>

                    <div  className="idiomas" >
                        <h3>-----   IDIOMAS   -----</h3>
                        <div className="espa">
                            <div><h4><i class="fas fa-circle"></i>  ESPAÑOL</h4>
                                <h5> &nbsp; &nbsp; &nbsp;NATIVO</h5>
                            </div> 
                            <div><h4><i class="fas fa-circle"></i>  INGLES</h4>
                                <h5> &nbsp; &nbsp; &nbsp;INTERMEDIO</h5>
                            </div> 
                            
                        </div>
                    </div>

                    <div  className="habilidades" >
                        <h3>-----   PROYECTOS   -----</h3>
                        <div className="git">
                            <a href="https://github.com/AidaGGB"><i class="fab fa-github-square"></i></a>
                            <p>Click me</p>
                        </div>
                    </div>


                    <div className="firma">
                        <h6>Aida Garzón</h6>
                        <p>Bogotá, Colombia</p>
                        <p>Referencias según requerimiento</p>
                    </div>
                    
                </section>
            </div>
        </div>

       
      
    );
  }
  
  export default Bodycv;
  