import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import MoreIcon from '../../img/Icono-FlechaVermásTexto-Cemaco.svg';
import './ProductCatalog.css';

class ProductCatalog extends React.Component{
    render(){
        return(
            <div className="containerProductCatalog">
                <div className="headerProductCatalog">
                    <h2 className="tittle">Organización ferretería</h2>
                    <span className="more">Ver todos <img src={MoreIcon}/></span>
                </div>
                <div className="containerWrapper">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
                <div className="headerProductCatalog">
                    <h2 className="tittle">Esenciales ferretería </h2>
                    <span className="more">Ver todos <img src={MoreIcon}/></span>
                </div>
                <div className="containerWrapper">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
        </div>
        );
    }
}

export default ProductCatalog;