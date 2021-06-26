import React from 'react';
import './OfferProduct.css';

class OfferProduct extends React.Component{
    render(){
        return(
            <div className="wrapperOfferProduct">
                <div className="containerOfferProduct" style={{backgroundColor: this.props.color}}>
                    <img src={this.props.src} className="imgOfferProduct" style={{padding: this.props.padding}}/>
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