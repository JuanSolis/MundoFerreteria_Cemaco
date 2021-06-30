import React from 'react';
import './DepartamentsList.css';
import DepartamentItem from '../DepartamentItem/DepartamentItem';
import DepartamentImg1 from '../../img/GettyImages-926681604.png'
import DepartamentImg2 from '../../img/890746.png';
import DepartamentImg3 from '../../img/Mask Group 76.png';
import DepartamentImg4 from '../../img/644320_2_A.png';
import DepartamentImg5 from '../../img/725813_1.png';
import DepartamentImg6 from '../../img/Group 7923.png';
import DepartamentImg7 from '../../img/Screen Shot 2020-08-25 at 14.38.24.png';
import DepartamentImg8 from '../../img/968296.png';
import DepartamentImg9 from '../../img/697390.png';
import DepartamentImg10 from '../../img/753735_b.png';
import DepartamentImg11 from '../../img/830982_A.png';
import DepartamentImg12 from '../../img/Rectangle 205.png';
import DepartamentImg13 from '../../img/Screen Shot 2020-08-25 at 14.41.22.png';
import DepartamentImg14 from '../../img/GettyImages-483451207.png';
import DepartamentImg15 from '../../img/986391_B_A.png';

class DepartamentsList extends React.Component{
    moreDepartaments(){
        const moreDepartaments = document.querySelector(".departamentListContainer .moreDepartaments");
        moreDepartaments.classList.add("hidden");

    }
    render(){
        
        return(
            <div className="departamentListContainer">
                <DepartamentItem src={DepartamentImg1}  href="https://www.cemaco.com/c-herramientas" name="Herramientas"/>
                <DepartamentItem src={DepartamentImg2}  href="https://www.cemaco.com/c-acabados" name="Seguridad industrial"/>
                <DepartamentItem src={DepartamentImg3}  href="https://www.cemaco.com/c-pinturas" name="Pinturas"/>
                <DepartamentItem src={DepartamentImg4}  href="https://www.cemaco.com/c-materiales-de-construccion" name="Materiales de construcción"/>
                <DepartamentItem src={DepartamentImg5}  href="https://www.cemaco.com/c-acabados" name="Acabados"/>
                <DepartamentItem src={DepartamentImg6}  href="https://www.cemaco.com/c-iluminacion" name="Iluminación y eléctricos"/>
                <DepartamentItem src={DepartamentImg7}  href="https://www.cemaco.com/c-ferreteria" name="Ferretería"/>
                <DepartamentItem src={DepartamentImg8}  href="https://www.cemaco.com/c-organizacion" name="Organización"/>
                <DepartamentItem src={DepartamentImg9}  href="https://www.cemaco.com/c-plomeria" name="Plomería"/>
                <DepartamentItem src={DepartamentImg10} href="https://www.cemaco.com/c-banos" name="Sanitarios y lavamanos"/>
                <DepartamentItem src={DepartamentImg11} href="https://www.cemaco.com/c-cocina-y-mesa" name="Instalaciones de cocina"/>
                <DepartamentItem src={DepartamentImg12} href="https://www.cemaco.com/c-acabados" name="Ver más" />
                <DepartamentItem src={DepartamentImg13} hidden={true}  href="https://www.cemaco.com/c-autos-y-motos" name="Autos y motos"/>
                <DepartamentItem src={DepartamentImg14} hidden={true}  href="https://www.cemaco.com/c-patio-y-jardin" name="Jardín"/>
                <DepartamentItem src={DepartamentImg15} hidden={true}  href="https://www.cemaco.com/c-tecnologia" name="Seguridad en casa"/>

            </div>
        );
    }
}

export default DepartamentsList;
