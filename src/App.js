import React from 'react';
import './App.css';
import HeaderMobilCemaco from './components/HeaderMobilCemaco/HeaderMobilCemaco';
import TopCarousel from './components/TopCarousel/TopCarousel';
import Offers from './components/Offers/Offers';
import ServiceBanner from './components/ServiceBanner/ServiceBanner';
import MoreIcon from './img/Icono-FlechaVermásTexto-Cemaco.svg';
import DepartamentsList from './components/DepartamentsList/DepartamentsList';
import ProductCatalog from './components/ProductCatalog/ProductCatalog';
import Brands from './components/Brands/Brands';
import GroupTools from './components/GroupTools/GroupTools';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenWidth: window.innerWidth };
  }

  handleResize = (e) => {
    this.setState({ screenWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  } 

  render(){
    return (
      <div className="App">
        <HeaderMobilCemaco/>
        <div className="topContainer">
          <TopCarousel/>
        </div>
        <Offers screenWidth={this.state.screenWidth}/>
        <div className="TopServicesBanners">
          <ServiceBanner id="topService1" href="https://www.cemaco.com/c-plomeria" colorFont="black" service="Plomería"/>
          <ServiceBanner id="topService2" href="https://www.cemaco.com/c-pinturas" colorFont="black"  service="Pinturas"/>
        </div>
        
        <div className="Departaments">
          <h2 className="tittle">Navega por departamento</h2>
          <span className="more"><a href="https://www.cemaco.com/c-pinturas">Ver todos</a><img src={MoreIcon}/></span>
          <DepartamentsList/>
        </div>
        <div className="serviceBanner">
          <ServiceBanner id="topService3" href="https://www.cemaco.com/c-autos" colorFont="#ffff"   service="Autos"/>
        </div>
        <ProductCatalog/>
        <Brands/>
        <GroupTools/>
        <div className="bottomBanner">
          <ServiceBanner id="topService4" href="https://www.cemaco.com/c-materiales-de-construccion" colorFont="#ffff"  service="Materiales de construcción y acabados "/>
        </div>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default App;
