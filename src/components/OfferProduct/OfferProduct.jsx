import React from 'react';
import './OfferProduct.css';

class OfferProduct extends React.Component{
    render(){
        return(
            <div className="wrapperOfferProduct">
                <div className="containerOfferProduct" style={{backgroundColor: this.props.color}}>
                    <a href="https://www.cemaco.com/bueno14"  style={{padding: this.props.padding}}>
                        <img src={this.props.screenWidth < 768 ? this.props.src : this.props.srcDesktop } className="imgOfferProduct"/>
                    </a>
                </div>
                <div className="containerDetailsOfferProduct">
                    <span className="priceOfferProduct">{this.props.offer}</span>
                    <span className="nameOfferProducto">{this.props.nameOfferProduct}</span>
                </div>
            </div>
        )
    }
}

export default OfferProduct;