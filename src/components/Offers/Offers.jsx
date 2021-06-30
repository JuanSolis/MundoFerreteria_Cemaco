import React from 'react';
import OfferProducto1 from '../../img/Image 442@2x.png';
import OfferProducto2 from '../../img/Image 443@2x.png';
import OfferProducto3 from '../../img/Image 444@2x.png';
import OfferProducto4 from '../../img/pizarra.jpg';
import OfferProduct from '../OfferProduct/OfferProduct';
import './Offers.css';

class Offers extends React.Component{
    render(){
        return(
            <div className="offersContainer">
                <OfferProduct src={OfferProducto1} padding="9px 10px 9px 17px" color="#1276A2" offer="Oferta Q349.99" nameOfferProduct="Moto-tool"/>
                <OfferProduct src={OfferProducto2} padding="4px 63px 4px 59px" color="#BBD556" offer="Oferta Q129.99" nameOfferProduct="Estantería"/>
                <OfferProduct src={OfferProducto3} padding="9px 29px 6px 33px"px  color="#996BA0" offer="Oferta desde Q38.49 c/u" nameOfferProduct="Cajas de herramientas"/>
                <OfferProduct src={OfferProducto4} padding="20px 35px" color="#536FFF" offer="Oferta Q99.99 " nameOfferProduct="Pizarra acrílica"/>
            </div>
        );
    }
}

export default Offers;