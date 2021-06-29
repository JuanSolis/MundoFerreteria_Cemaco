import React from 'react';
import JuguetonLogoHeader from '../../img/JUGUETON SIN SOMBRA.svg';
import CemacoLogoHeader from '../../img/LOGO CEMACO HORIZONTAL  BLANCO.svg';
import bebeJuguetonLogoHeader from '../../img/Group 1051.svg';
import userAccountIcon from '../../img/Path 8954.svg';
import wishListIcon from '../../img/Path 8953.svg';
import checkOutIcon from '../../img/Group 1060.svg';
import searchIcon from '../../img/Group 564.svg';
import moreItemsNavBar from '../../img/Path 52.svg';
import closeBadge from '../../img/Path 8671.svg';
import downArrow from '../../img/downArrow.svg';
import './HeaderMobilCemaco.css';

class HeaderMobilCemaco extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="rectangles">
                    <div className="rectangle rg-109">
                        <a href="https://www.cemaco.com/jugueton"><img href="https://www.cemaco.com/jugueton" className="juguetonLogo" src={JuguetonLogoHeader} alt="" /></a>
                    </div>
                    <div className="rectangle rg-108">
                        <a href="https://www.cemaco.com/"><img className="cemacoLogo" src={CemacoLogoHeader} alt="" /></a>
                    </div>
                    <div className="rectangle rg-107">
                        <a href="https://www.cemaco.com/bebe-jugueton">
                            <img  className="bebeJuguetonLogo" src={bebeJuguetonLogoHeader} alt="" />
                        </a>
                    </div>
                </div>
                <div className="hero">
                    <div className="topHero">
                        <a href="https://www.cemaco.com/"><img src={CemacoLogoHeader} className="cemacoLogo" alt="" /></a>
                        <div className="searchInput">
                            <input type="text"  placeholder="Buscar"/>
                            <img src={searchIcon}  alt="" />
                        </div>
                        <div className="heroIcons">
                            <a href="https://www.cemaco.com/login?ReturnUrl=%2f_secure%2faccount#/orders">
                                <img className="icon userAccountIcon" src={userAccountIcon} alt="" />
                            </a>
                            <a href="https://www.cemaco.com/login?ReturnUrl=%2f_secure%2faccount%2fwishlist">
                                <img className="icon wishListIcon" src={wishListIcon} alt="" />
                            </a>
                            <a href="https://www.cemaco.com/checkout">
                                <img className="icon checkOutIcon" src={checkOutIcon} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="navbar">
                            <li>
                                <ul>
                                    <a className="item firs-item" href="">Departamentos <img className="downArrowIcon" src={downArrow} alt="" /></a>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <a className="item" href="">Promociones <img className="downArrowIcon" src={downArrow} alt="" /></a>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <a className="item" href="">Bodas <img className="downArrowIcon" src={downArrow} alt="" /></a>
                                </ul>
                            </li>
                            <li> 
                                <ul>
                                    <a className="item" href="">Tiendas <img className="downArrowIcon" src={downArrow} alt="" /></a>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <a className="item" href="">Puntos <img className="downArrowIcon" src={downArrow} alt="" /></a>
                                </ul>
                            </li>
                            <li>
                                <ul><a className="item" href=""><span>Más</span><img src={moreItemsNavBar} alt="" /></a></ul>
                            </li>
                        </div>
                </div>
                <div className="badge">
                    <p>Envió gratis en tu primera comprar, <a href="https://www.cemaco.com/activacion">entérate aquí</a></p>
                    <img src={closeBadge} alt="" />
                </div>
            </div>
        );
    }
}


export default HeaderMobilCemaco;