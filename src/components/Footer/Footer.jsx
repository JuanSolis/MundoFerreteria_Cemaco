import React from 'react';
import cemacoLogo from '../../img/Group 1114.svg';
import moreItemsNavBar from '../../img/Path 52.svg';
import whatsapp from '../../img/Path 9006.svg';
import phone from '../../img/Path 9007.svg';
import mail from '../../img/Path 9008.svg';
import chat from '../../img/Path 9009.svg';
import facebook from '../../img/facebook.png';
import youtube from '../../img/youtube.png';
import twitter from '../../img/twitter.png';
import pinterest from '../../img/pinterest.png';
import instagram from '../../img/instagram.png';

import './Footer.css'; 

class Footer extends React.Component{
    render(){
        return(
            <div className="footerContainer">
                <div className="elementsWrapper">
                    <div className="wrapperItems">
                        <div className="footerItem">
                            <h3>Servicios</h3>
                            <img className="moreItems" src={moreItemsNavBar} alt="" />
                            <div className="content">
                                <ul>
                                    <li><a href="https://www.cemaco.com/instalaciones/">Instalaciones</a></li>
                                    <li><a href="https://www.cemaco.com/tiendas">Tiendas</a></li>
                                    <li><a href="https://www.cemaco.com/privilegio">Privilegios</a></li>
                                    <li><a href="https://www.cemaco.com/servicio-empresas">Servicio a Empresas</a></li>
                                    <li><a href="https://www.cemaco.com/mesa-de-regalos/boda">Bodas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footerItem">
                            <h3>Venta en línea</h3>
                            <img className="moreItems" src={moreItemsNavBar} alt="" />
                            <div className="content">
                                <ul>
                                    <li><a href="https://www.cemaco.com/autoservicio">Retira en tienda</a></li>
                                    <li><a href="https://www.cemaco.com/metodos-de-pago">Métodos de pago</a></li>
                                    <li><a href="https://www.cemaco.com/preguntas-frecuentes">Preguntas frecuentes</a></li>
                                    <li><a href="https://www.cemaco.com/privacidad-y-seguridad">Privacidad y seguridad</a></li>
                                    <li><a href="https://www.cemaco.com/terminos-y-condiciones">Términos y condiciones</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footerItem">
                            <h3>Nuestros Valores</h3>
                            <img className="moreItems" src={moreItemsNavBar} alt="" />
                            <div className="content">
                                <ul>
                                    <li><a href="https://www.cemaco.com/sostenibilidad">Sostenibilidad</a></li>
                                    <li><a href="https://www.cemaco.com/garantia-total">Garantía Total</a></li>
                                    <li><a href="https://www.cemaco.com/sostenibilidad#empresaB">Certificación Sistema B</a></li>
                                </ul>
                            </div>
                        </div>
                    <div className="footerItem">
                        <h3>Grupo <img className="logoBlanco" src={cemacoLogo} alt="" /></h3>
                        <img className="moreItems" src={moreItemsNavBar} alt="" />
                        <div className="content">
                            <ul className="content">
                                <li><a href="https://grupocemaco.com/">Únete a nuestro equipo</a></li>
                                <li><a href="https://www.cemaco.com/sostenibilidad">Sobre nosotros</a></li>
                                <li><a href="https://www.cemaco.com/proveedores">Deseas ser proveedor</a></li>
                                <li><a href="https://www.cemaco.com/sostenibilidad">Blog</a></li>
                                <li><a href="https://www.cemaco.com/jugueton">Juguetón</a></li>
                                <li><a href="https://www.cemaco.com/bebe-jugueton">Bebé Juguetón</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="contact">
                        <h3 className="titleContacto">Mantente Conectado </h3>
                        <div className="element">
                            <img src={whatsapp} alt="" />
                            <h3>Compra por WhatsApp</h3>
                        </div>
                        <div className="element">
                            <img src={phone} alt="" />
                            <h3>+ (502) 2499-9900</h3>
                        </div>
                        <div className="element">
                            <img src={mail} alt="" />
                            <h3>tusamigos@cemaco.com</h3>
                        </div>
                        <div className="element">
                            <img src={chat} alt="" />
                            <h3>Chat en línea</h3>
                        </div>
                        <div className="socialNetworks">
                                <img className="fb" src={facebook} alt="" />
                                <img className="ig"src={instagram} alt="" />
                                <img className="yb" src={youtube} alt="" />
                                <img className="tw" src={twitter} alt="" />
                                <img className="pt" src={pinterest} alt="" />
                            </div>
                    </div>
                    
                </div>

                

                </div>
                <p className="politics">Politica y privacidad. Términos y condiciones.</p>
            </div>
        );
    }
}

export default Footer;