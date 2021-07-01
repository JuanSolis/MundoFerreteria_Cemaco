import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import MoreIcon from '../../img/Icono-FlechaVermásTexto-Cemaco.svg';
import './ProductCatalog.css';

class ProductCatalog extends React.Component{

    render(){
        const apiElement = {
             products:[
                    {
                        Image: 'https://cemacogt.vteximg.com.br/arquivos/ids/335138-1100-1100/1038718_1.jpg?v=637591408631700000',
                        detalle: 'KIT ROTO Y ATORNILLADOR BL 20V DEWALT A - DEWALT',
                        precio: 'Q2,999.00',
                        category: 'Barrenos Y Atornilladores',
                        url: 'https://www.cemaco.com/kit-roto-y-atornillador-bl-20v-dewalt-a---dewalt-1038718/p'
                    },
                    {
                        Image: 'https://cemacogt.vteximg.com.br/arquivos/ids/300534-1100-1100/1038717_1.jpg?v=637591473626270000',
                        detalle: 'ROTOMARTILLO 1/2 7A - CRAFTSMAN',
                        precio: 'Q919.99',
                        category: 'Barrenos Y Atornilladores',
                        url: 'https://www.cemaco.com/rotomartillo-1-2-7a---craftsman-1038717/p'
                    },
                    {
                        Image: 'https://cemacogt.vteximg.com.br/arquivos/ids/292122-1100-1100/1027340_1.jpg?v=637591417970400000',
                        detalle: 'SET PUNTAS 50 PIEZAS ACE',
                        precio: 'Q109.99',
                        category: 'Barrenos Y Atornilladores',
                        url: 'https://www.cemaco.com/-set-puntas-50-piezas-ace-1027340/p'
                    },
                    {
                        Image: 'https://cemacogt.vteximg.com.br/arquivos/ids/403367-1100-1100/1046597_1.jpg?v=637591479050000000',
                        detalle: 'TALADRO PROFESIONAL 380 W 3/8 - TRUPER',
                        precio: 'Q309.99',
                        category: 'Barrenos Y Atornilladores',
                        url: 'https://www.cemaco.com/taladro-profesional-380-w-3-8---truper-1046597/p'
                    },
                    {
                        Image: 'https://cemacogt.vteximg.com.br/arquivos/ids/357442-1100-1100/1028932_1.jpg?v=637591525008070000',
                        detalle: 'CINCEL PLANO DE 12 - MAKITA',
                        precio: 'Q199.99',
                        category: 'Barrenos Y Atornilladores',
                        url: 'https://www.cemaco.com/cincel-plano-de-12---makita-1028932/p'
                    },
                    {
                        Image: 'https://cemacogt.vteximg.com.br/arquivos/ids/349864-1100-1100/1047268_1.jpg?v=637591358198200000',
                        detalle: 'PUNTA PHILLIPS NO. 2 DE 1 PLG DEWALT - ACE',
                        precio: 'Q19.99',
                        category: 'Barrenos Y Atornilladores',
                        url: 'https://www.cemaco.com/punta-phillips-no--2-de-1-plg-dewalt---ace-1047268/p'
                    },
                ]
        };

        return(
           
            <div className="containerProductCatalog">
                <div className="headerProductCatalog">
                    <h2 className="tittle">Barrenos y Atornilladores</h2>
                        <span className="more"><a href="https://www.cemaco.com/c-herramientas/herramientas-electricas/barrenos-y-atornilladores">Ver todos </a> <img src={MoreIcon}/></span>
                </div>
                <div className="containerWrapper">
                    {apiElement.products.map((product,i) => {
                        return(
                            <ProductItem key={i} href={product.url} img={product.Image} details={product.detalle} price={product.precio}/>
                        )
                    })}
                                   
                </div>
        </div>
        );
    }
}

export default ProductCatalog;