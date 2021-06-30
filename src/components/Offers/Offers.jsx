import React from 'react';
import OfferProducto1 from '../../img/Image 442.png';
import OfferProducto2 from '../../img/Image 443.png';
import OfferProducto3 from '../../img/Image 444.png';
import OfferProducto4 from '../../img/pizarra1.jpg';
import OfferProducto1Desktop from '../../img/Image 436.png';
import OfferProducto2Desktop from '../../img/Image 437.png';
import OfferProducto3Desktop from '../../img/Image 438.png';
import OfferProducto4Desktop from '../../img/pizarraDesktop.jpg';
import OfferProduct from '../OfferProduct/OfferProduct';
import './Offers.css';

class Offers extends React.Component{
    render(){
        return(
            <div className="offersContainer">
                <OfferProduct screenWidth={this.props.screenWidth} src={OfferProducto1} srcDesktop={OfferProducto1Desktop} color="#1276A2" offer="Oferta Q349.99" nameOfferProduct="Moto-tool"/>
                <OfferProduct screenWidth={this.props.screenWidth} src={OfferProducto2} srcDesktop={OfferProducto2Desktop} color="#BBD556" offer="Oferta Q129.99" nameOfferProduct="Estantería"/>
                <OfferProduct screenWidth={this.props.screenWidth} src={OfferProducto3} srcDesktop={OfferProducto3Desktop} color="#996BA0" offer="Oferta desde Q38.49 c/u" nameOfferProduct="Cajas de herramientas"/>
                <OfferProduct screenWidth={this.props.screenWidth} src={OfferProducto4} srcDesktop={OfferProducto4Desktop} color="#536FFF" offer="Oferta Q99.99 " nameOfferProduct="Pizarra acrílica"/>
            </div>
        );
    }
}

export default Offers;