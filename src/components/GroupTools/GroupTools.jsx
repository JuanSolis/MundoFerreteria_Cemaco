import React from 'react';
import './GroupTools.css';
import ToolItem from '../ToolItem/ToolItem';
import MoreIcon from '../../img/Icono-FlechaVermásTexto-Cemaco.svg';
import tool1 from '../../img/Mask Group 62.png';
import tool2 from '../../img/Mask Group 64.png';
import tool3 from '../../img/Mask Group 65.png';
import tool4 from '../../img/Mask Group 66.png';
import tool5 from '../../img/Mask Group 67.png';
import tool6 from '../../img/tool6.png';
import tool7 from '../../img/tool7.png';
import tool8 from '../../img/tool8.png';
import tool9 from '../../img/tool9.png';
import tool10 from '../../img/tool10.png';
import more from '../../img/Rectangle 263.png';

class GroupTools extends React.Component{
    render(){
        return(
            <div className="groupTools">
                <div className="headerGroupTools">
                    <h2 className="tittle">Herramientas</h2>
                    <span className="more">Ver más <img src={MoreIcon}/></span>
                </div>
                <div className="toolsWrapper">
                    <ToolItem src={tool1} tittle="Herramientas eléctricas" />
                    <ToolItem src={tool2} tittle="Accesorios para herramientas eléctricas" />
                    <ToolItem src={tool3} tittle="Herramientas manuales" />
                    <ToolItem src={tool4} tittle="Seguridad industrial" />
                    <ToolItem src={tool5} tittle="Compresores y herramientas neumáticas" />
                    <ToolItem src={more} tittle="Ver más" />
                </div>
                <div className="headerGroupTools">
                    <h2 className="tittle">Iluminación y eléctricos</h2>
                    <span className="more">Ver más <img src={MoreIcon}/></span>
                </div>
                <div className="toolsWrapper">
                    <ToolItem src={tool6} tittle="Accesorios para instalaciones eléctricas" />
                    <ToolItem src={tool7} tittle="Bombillas, tubos y más" />
                    <ToolItem src={tool8} tittle="Cables, tuberías y accesorios eléctricos" />
                    <ToolItem src={tool9} tittle="Extensiones, ups y protectores de corriente" />
                    <ToolItem src={tool10} tittle="Lámparas de interior y exterior" />
                    <ToolItem src={more} tittle="Ver más" />
                </div>
            </div>
        );
    }
}

export default GroupTools;