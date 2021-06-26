import React from 'react';
import EllipseTopCarousel from '../../img/Ellipse 25.svg';
import ActiveEllipseTopCarousel from '../../img/Ellipse 23.svg';
import './TopCarousel.css';

class TopCarousel extends React.Component{
    render(){
        return(
                <div className="containerTopCarousel">
                    <div className="topCarousel">
                        <div className="wrapper">
                            <div id="carousel__slide1" className="carouselItem">
                                <h1 className="h1-mobile-BannerMonster white">
                                    La mejor calidad para tus proyectos
                                </h1>
                            </div>
                            <div id="carousel__slide2" className="carouselItem">
                                <h1 className="h1-mobile-BannerMonster white">
                                    Miles de productos para tus proyectos
                                </h1>
                            </div>
                            <div id="carousel__slide3" className="carouselItem">
                                <h1 className="h1-mobile-BannerMonster black">
                                    La mejor asesoría para tus proyectos
                                </h1>
                            </div>
                        </div> 
                    </div>
                    
                    <div className="carousel__navigation">
                            <ol className="carousel__navigation-list">
                                <li className="carousel__navigation-item">
                                    <a href="#carousel__slide1" className="carousel__navigation-button">
                                        <img src={ActiveEllipseTopCarousel} alt="" />
                                    </a>
                                </li>
                                <li className="carousel__navigation-item">
                                    <a href="#carousel__slide2" className="carousel__navigation-button">
                                        <img src={EllipseTopCarousel} alt="" />
                                    </a>
                                </li>
                                <li className="carousel__navigation-item">
                                    <a href="#carousel__slide3" className="carousel__navigation-button">
                                        <img src={EllipseTopCarousel} alt="" />
                                    </a>
                                </li>
                            </ol>
                    </div>   
                    
                </div>
                
        )
    }
}

export default TopCarousel;