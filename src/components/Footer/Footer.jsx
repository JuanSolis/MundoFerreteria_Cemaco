import React from 'react';
import cemacoLogo from '../../img/Group 1114.svg';
import moreItemsNavBar from '../../img/Path 52.svg';
import whatsapp from '../../img/Path 9006.svg';
import phone from '../../img/Path 9007.svg';
import mail from '../../img/Path 9008.svg';
import chat from '../../img/Path 9009.svg';
import './Footer.css'; 

class Footer extends React.Component{
    render(){
        return(
            <div className="footerContainer">
                <div className="elementsWrapper">
                    <div className="footerItem">
                        <h3>Servicios</h3>
                        <img src={moreItemsNavBar} alt="" />
                    </div>
                    <div className="footerItem">
                        <h3>Venta en línea</h3>
                        <img src={moreItemsNavBar} alt="" />
                    </div>
                    <div className="footerItem">
                        <h3>Nuestros Valores</h3>
                        <img src={moreItemsNavBar} alt="" />
                    </div>
                    <div className="footerItem">
                        <h3>Grupo <img className="logoBlanco" src={cemacoLogo} alt="" /></h3>
                        <img src={moreItemsNavBar} alt="" />
                    </div>
                    <div className="contact">
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
                    </div>
                </div>
                <p className="politics">Politica y privacidad. Términos y condiciones.</p>
            </div>
        );
    }
}

export default Footer;