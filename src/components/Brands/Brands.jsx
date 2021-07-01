import React from 'react';
import Brand1 from '../../img/Group 1159@2x.png';
import Brand2 from '../../img/Group 1164@2x.png';
import Brand3 from '../../img/Group 1165@2x.png';
import Brand4 from '../../img/Group 1170@2x.png';
import Brand5 from '../../img/Group 1154@2x.png';
import prevArrowIcon from '../../img/Group 999.svg'
import NextArrowIcon from '../../img/Group 998.svg'

import './Brands.css';

class Brands extends React.Component{
    constructor(props){
        super(props);
        this.brandSlider = React.createRef();
    }

    scroll = (direction) =>{
        const movement =  this.brandSlider.current.offsetWidth / 2 * direction;
        const position = this.brandSlider.current.scrollLeft + movement;
        this.brandSlider.current.scroll({left: position, behavior: 'smooth'});

    };
    render(){
        return(
            <div className="brandsContainer">
                <h2 className="tittle">Las mejores marcas</h2>
                <div className="sliderWrapper">
                    <img src={prevArrowIcon} className="prevIcon"alt="" onClick={this.scroll.bind(null,-1)}/>
                        <div className="brandSlider" ref={node => this.brandSlider.current = node}>
                            <img className="brand brand-1" src={Brand1} alt="" />
                            <img className="brand brand-2" src={Brand2} alt="" />
                            <img className="brand brand-3" src={Brand3} alt="" />
                            <img className="brand brand-4" src={Brand4} alt="" />
                            <img className="brand brand-5" src={Brand5} alt="" />
                            <img className="brand brand-1" src={Brand1} alt="" />
                            <img className="brand brand-2" src={Brand2} alt="" />
                            <img className="brand brand-3" src={Brand3} alt="" />
                            <img className="brand brand-4" src={Brand4} alt="" />
                            <img className="brand brand-5" src={Brand5} alt="" />
                        </div>
                    <img src={NextArrowIcon} className="nextIcon"alt="" onClick={this.scroll.bind(null,1)}/> 
                </div>
            </div>
        );
    }
}

export default Brands;
