import React from 'react';
import imgTestCarousel from '../../img/Image-Producto-Carrusel.png';
import favIcon from '../../img/Path 8804.svg';
import starsIcon from '../../img/Icono-Estrella-Reseña-4.svg';
import ColorsElip from '../../img/Group 7924.svg';
import arrowColors from '../../img/Group 3.svg';
import arrowColors2 from '../../img/Group 7925.svg';
import './ProductItem.css';

class ProductItem extends React.Component {
    render(){
        return(
            <div className="productItemContainer">
                <img className="favIcon" src={favIcon} alt="" />
                <div className="elements">
                    <img className="imgProduct" src={imgTestCarousel} alt="" />
                    <div className="colorsContainer">
                        <img className="leftArrow" src={arrowColors2} alt="" />
                        <img className="colors" src={ColorsElip} alt="" />
                        <img className="rightArrow" src={arrowColors} alt="" />
                    </div>
                    <h3 className="util">Black &amp; Decker</h3>
                    <h3 className="productDetail">Licuadora vaso plastico 2 velocidades</h3>
                    <img className="stars" src={starsIcon} alt="" />
                    <div className="productFooterWrapper">
                        <div className="cost">
                            <div className="productPriceContainer">
                                <p>Desde </p>
                                <p className="productPrice">Q279.99</p>
                            </div>
                            <p className="productDelivery">Envío gratis</p>
                        </div>
                        <button>Ver más</button>
                    </div>
               </div>
            </div>
        );
    }
}

export default ProductItem;