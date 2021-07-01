import React from 'react';
import cemacoLogo from '../../img/Group 1114.svg';
import moreItemsNavBar from '../../img/Path 52.svg';
import whatsapp from '../../img/Path 9006.svg';
import phone from '../../img/Path 9007.svg';
import mail from '../../img/Path 9008.svg';
import chat from '../../img/Path 9009.svg';
import facebook from '../../img/Path 8563.svg';
import youtube from '../../img/Path 8567.svg';
import twitter from '../../img/Path 8561.svg';
import pinterest from '../../img/Path 8562.svg';
import instagram from '../../img/Group 7923.svg';

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
                            <ul>
                                <li><a href="https://grupocemaco.com/">Únete a nuestro equipo</a></li>
                                <li><a href="https://www.cemaco.com/sostenibilidad">Sobre nosotros</a></li>
                                <li><a href="https://www.cemaco.com/proveedores">Deseas ser proveedor</a></li>
                                <li><a href="https://www.cemaco.com/sostenibilidad">Blog</a></li>
                                <li><a href="https://www.cemaco.com/jugueton">Juguetón</a></li>
                                <li><a href="https://www.cemaco.com/bebe-jugueton">Bebé Juguetón</a></li>
                            </ul>
                        </div>
                        
                    </div>
                        <div className="contact ">
                        <h3 className="titleContacto">Mantente Conectado</h3>
                        <div className="contactElements">
                            <ul className="">
                                <li>
                                    <img src={whatsapp} alt="" />
                                    <a href="https://wa.me/+50224999990"target="_blank">Compra por Whatsapp</a>
                                </li>
                                <li>
                                    <img src={phone} alt="" />
                                    <a href="tel:+50224999900">+ (502) 2499-9900</a>
                                </li>
                                <li>
                                    <img src={mail} alt="" />
                                    <a href="mailto:tusamigos@cemaco.com">tusamigos@cemaco.com</a>
                                </li>
                                <li>
                                    <img src={chat} alt="" />
                                    <a href="https://wa.me/+50224999990">Chat en línea</a>
                                </li>
                            </ul>
                        </div>
                        <div className="socialNetworks">
                                <a href="https://www.facebook.com/cemacogt/"><img className="fb" src={facebook} alt="" /></a>
                                <a href="https://www.instagram.com/cemaco/?hl=es-la"><img className="ig"src={instagram} alt="" /></a>
                                <a href="https://www.youtube.com/channel/UCpJPCPrEg3x3DeCKgblA43A"><img className="yb" src={youtube} alt="" /></a>
                                <a href="https://twitter.com/cemaco_gt?lang=es"><img className="tw" src={twitter} alt="" /></a>
                                <a href="https://www.pinterest.com/cemacoguatemala/"><img className="pt" src={pinterest} alt="" /></a>
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