import React from 'react';
import EllipseTopCarousel from '../../img/Ellipse 25.svg';
import ActiveEllipseTopCarousel from '../../img/Ellipse 23.svg';
import './TopCarousel.css';

class TopCarousel extends React.Component{
    render(){
        return(
                <div className="containerTopCarousel">
                    <div className="wrapper">
                        <input type="radio" name="slider" className="radio1" defaultChecked={true} id="slider_1"/>
                        <input type="radio" name="slider" className="radio2" id="slider_2"/>
                        <input type="radio" name="slider" className="radio3" id="slider_3"/>
                        <div className="pagination">
                            <label htmlFor="slider_1" className="page1"></label>
                            <label htmlFor="slider_2" className="page2"></label>
                            <label htmlFor="slider_3" className="page3"></label>
                        </div>
                        <div className="slider slide1">
                            <div>
                                <h1 className="h1-mobile-BannerMonster">La mejor calidad para tus proyectos</h1>
                            </div>
                        </div>
                        <div className="slider slide2">
                            <div>
                                <h1 className="h1-mobile-BannerMonster">Miles de productos para tus proyectos</h1>
                            </div>
                        </div>
                        <div className="slider slide3">
                            <div>
                                <h1 className="h1-mobile-BannerMonster black">La mejor asesoría para tus proyectos</h1>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
        )
    }
}

export default TopCarousel;