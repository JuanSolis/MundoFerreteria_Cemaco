import React from 'react';
import aboutLogo from '../../img/aboutLogo.svg';
import MoreIcon from '../../img/Icono-FlechaVermásTexto-Cemaco.svg';
import searchIcon from '../../img/Group 564.svg';
import './About.css'; 

class About extends React.Component{
    render(){
        return(
            <div className="aboutContainer">
                <div className="topAboutUs">
                    <div className="logoEmpresa">
                        <h2 className="tittle">Empresa</h2>
                        <img className="logoB" src={aboutLogo} alt="" />
                    </div>
                    <div>
                        <h2 className="somos">Somos una Empresa B</h2>
                        <p className="paragraph">Estamos orgullosos de ser reconocidos por los más altos estándares a nivel mundial de sostenibilidad social y ambiental. </p>
                        <div className="moreContainer">
                            <span className="more">Conoce más <img src={MoreIcon}/></span>
                        </div>
                    </div>
                </div>
                <div className="bottomAboutUs">
                    <h2 className="tittle">Suscríbete</h2>
                    <p>Recibe ofertas, noticias y promociones</p>
                    <div className="emailInput">
                        <input type="text"  placeholder="Ingresa tu email"/>
                        <img src={searchIcon}  alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;