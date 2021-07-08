import './Contenido.css';
import Header from '../header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";


function Contenido () {
    return (
        <div>
        <Header/>
        <div className="contenido">
            <section className="experiencia">
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
                                    
                        <div className="datos">
                            <li><h5>BACTERIÓLOGA</h5>
                                <h6>Hospital Militar Central</h6>
                                <h6>Banco de sangre</h6> 
                                <p>Enero de 2011 - Junio de 2013</p>
                            </li>
                        </div>

                        <div className="datos">
                            <li><h5>BACTERIÓLOGA</h5>
                                <h6>Hospital Universitario Infantil San José</h6>
                                <h6>Banco de sangre</h6> 
                                <p>Junio de 2010 - Diciembre de 2010</p>
                            </li>
                        </div>

                        <div className="datos">
                            <li><h5>SALUD OCUPACIONAL</h5>
                                <h6>Riesgos y Soluciones</h6>
                                <h6>Capacitador</h6> 
                                <p>Mayo de 2009 - Diciembre de 2009</p>
                            </li>
                        </div>

                        <div className="datos">
                            <li><h5>BACTERIÓLOGA</h5>
                                <h6>Hospital Militar Central</h6>
                                <h6>Banco de sangre</h6> 
                                <p>Diciembre de 2005 - Febrero de 2008</p>
                            </li>
                        </div>
                        <div className="ruta2">
                            <li type="none">
                                <HashRouter basename="/"/>
                                <Link to="/" className="boton2"><i class="fas fa-minus"></i>  Volver</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </section>

            <section className="experiencia2">
                <div>
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

                        <div className="datos">
                            <li><h5>TÉCNICO LABORAR AUXILIAR DE ENFERMERIA</h5>
                                <h6>ESCUELA PARA AUXILIARES DE ENFERMERIA SAN RAFAEL </h6>
                                <h6>BOGOTÁ, COLOMBIA</h6>
                                <p>Agosto de 1997</p>
                            </li>
                        </div>

                        <h2>OTRA FORMACIÓN</h2>

                        <div className="datos">
                            <li><h5>ESTADÍSTICA DESCRIPTIVA R-STUDIO Y PYTHON</h5>
                                <h6>UDEMY </h6>
                                <h6>BOGOTÁ, COLOMBIA</h6>
                                <p>Actualmente</p>
                            </li>
                        </div>

                        <div className="datos">
                            <li><h5>DIPLOMADO VERIFICADORES DEL CUMPLIMIENTO DE CONDICIONES PARA LA HABILITACIÓN DE  DE PRESTADORES DE SERVICIOS DE SALUD </h5>
                                <h6>UNIVERSIDAD EL BOSQUE </h6>
                                <h6>BOGOTÁ, COLOMBIA</h6>
                                <p>Mayo de 2013</p>
                            </li>
                        </div>

                        <div className="datos">
                            <li><h5>DIPLOMADO GARANTÍA DE CALIDAD, PROMOCIÓN DE LA DONACIÓN Y LEGISLACIÓN EN  BANCOS DE SANGRE</h5>
                                <h6>PONTIFICIA UNIVERSIDAD JAVERIANA </h6>
                                <h6>BOGOTÁ, COLOMBIA</h6>
                                <p>Abril de 2008</p>
                            </li>
                        </div>
                        
                    </ul>
                </div>
            </section>
        </div>
        </div>
            
    );
  }
  
  export default Contenido;
  