import React from 'react';
import './DepartamentsList.css';
import DepartamentItem from '../DepartamentItem/DepartamentItem';
import DepartamentImg1 from '../../img/GettyImages-926681604.png'
import DepartamentImg2 from '../../img/Mask Group 83.png';
import DepartamentImg3 from '../../img/Mask Group 84.png';
import DepartamentImg4 from '../../img/Mask Group 85.png';
import DepartamentImg5 from '../../img/725813_1.png';
import DepartamentImg6 from '../../img/Group 7923.png';
import DepartamentImg7 from '../../img/Screen Shot 2020-08-25 at 14.38.24.png';
import DepartamentImg8 from '../../img/968296.png';
import DepartamentImg9 from '../../img/697390.png';
import DepartamentImg10 from '../../img/Mask Group 86.png';
import DepartamentImg11 from '../../img/830982_A.png';
import DepartamentImg12 from '../../img/Rectangle 386.png';
import DepartamentImg13 from '../../img/Screen Shot 2020-08-25 at 14.41.22.png';
import DepartamentImg14 from '../../img/Mask Group 87.png';
import DepartamentImg15 from '../../img/Mask Group 88.png';

class DepartamentsList extends React.Component{
    render(){
        return(
            <div className="departamentListContainer">
                <DepartamentItem src={DepartamentImg1} name="Herramientas"/>
                <DepartamentItem src={DepartamentImg2} name="Seguridad industrial"/>
                <DepartamentItem src={DepartamentImg3} name="Pinturas"/>
                <DepartamentItem src={DepartamentImg4} name="Materiales de construcción"/>
                <DepartamentItem src={DepartamentImg5} name="Acabados"/>
                <DepartamentItem src={DepartamentImg6} name="Iluminación y eléctricos"/>
                <DepartamentItem src={DepartamentImg7} name="Ferretería"/>
                <DepartamentItem src={DepartamentImg8} name="Organización"/>
                <DepartamentItem src={DepartamentImg9} name="Plomería"/>
                <DepartamentItem src={DepartamentImg10} name="Sanitarios y lavamanos"/>
                <DepartamentItem src={DepartamentImg11} name="Instalaciones de cocina"/>
                <DepartamentItem src={DepartamentImg12} name="Ver más"/>
                <DepartamentItem src={DepartamentImg13} name="Autos y motos"/>
                <DepartamentItem src={DepartamentImg14} name="Jardín"/>
                <DepartamentItem src={DepartamentImg15} name="Seguridad en casa"/>
            </div>
        );
    }
}

export default DepartamentsList;
