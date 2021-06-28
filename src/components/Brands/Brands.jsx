import React from 'react';
import Brand1 from '../../img/Group 1181.png';
import Brand2 from '../../img/Group 1186.png';
import Brand3 from '../../img/Group 1187.png';
import Brand4 from '../../img/Group 1192.png';
import Brand5 from '../../img/Group 1176.png';

import './Brands.css';

class Brands extends React.Component{
    render(){
        return(
            <div className="brandsContainer">
                <h2 className="tittle">Las mejores marcas</h2>
                <div className="brandSlider">
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
            </div>
        );
    }
}

export default Brands;
