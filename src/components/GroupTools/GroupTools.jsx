import React from 'react';
import './GroupTools.css';
import ToolItem from '../ToolItem/ToolItem';
import MoreIcon from '../../img/Icono-FlechaVermásTexto-Cemaco.svg';
import tool1 from '../../img/Mask Group 109@2x.png';
import tool2 from '../../img/Mask Group 2207@2x.png';
import tool3 from '../../img/Mask Group 108@2x.png';
import tool4 from '../../img/Mask Group 111@2x.png';
import tool5 from '../../img/Mask Group 112@2x.png';
import tool6 from '../../img/Mask Group 69@2x.png';
import tool7 from '../../img/Mask Group 73@2x.png';
import tool8 from '../../img/Mask Group 68@2x.png';
import tool9 from '../../img/Mask Group 71@2x.png';
import tool10 from '../../img/Mask Group 72@2x.png';
import more from '../../img/Rectangle 263.png';

class GroupTools extends React.Component{
    render(){
        return(
            <div className="groupTools">
                <div className="headerGroupTools">
                    <h2 className="tittle">Herramientas</h2>
                    <span className="more"><a href="https://www.cemaco.com/c-herramientas">Ver más</a> <img src={MoreIcon}/></span>
                </div>
                <div className="toolsWrapper">
                    <ToolItem src={tool1} href="https://www.cemaco.com/c-herramientas" tittle="Herramientas eléctricas" />
                    <ToolItem src={tool2} href="https://www.cemaco.com/segundonivel/herramientas#accesoriosherramientas" tittle="Accesorios para herramientas eléctricas" />
                    <ToolItem src={tool3} href="https://www.cemaco.com/segundonivel/herramientas#herramientasmanuales" tittle="Herramientas manuales" />
                    <ToolItem src={tool4} href="https://www.cemaco.com/segundonivel/herramientas#seguridadindustrial" tittle="Seguridad industrial" />
                    <ToolItem src={tool5} href="https://www.cemaco.com/segundonivel/herramientas#compresores" tittle="Compresores y herramientas neumáticas" />
                    <ToolItem src={more} href="#" tittle="Ver más" />
                </div>
                <div className="headerGroupTools">
                    <h2 className="tittle">Iluminación y eléctricos</h2>
                    <span className="more"><a href="https://www.cemaco.com/c-iluminacion">Ver más</a> <img src={MoreIcon}/></span>
                </div>
                <div className="toolsWrapper">
                    <ToolItem src={tool6} href="https://www.cemaco.com/segundonivel/electricos#electricista" tittle="Accesorios para instalaciones eléctricas" />
                    <ToolItem src={tool7} href="https://www.cemaco.com/segundonivel/electricos#bombillas" tittle="Bombillas, tubos y más" />
                    <ToolItem src={tool8} href="https://www.cemaco.com/segundonivel/electricos#cables" tittle="Cables, tuberías y accesorios eléctricos" />
                    <ToolItem src={tool9} href="https://www.cemaco.com/segundonivel/electricos#extensiones" tittle="Extensiones, ups y protectores de corriente" />
                    <ToolItem src={tool10} href="https://www.cemaco.com/segundonivel/iluminacion#interior" tittle="Lámparas de interior y exterior" />
                    <ToolItem src={more} href="" tittle="Ver más" />
                </div>
            </div>
        );
    }
}

export default GroupTools;