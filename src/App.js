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

function App() {
  return (
    <div className="App">
      <HeaderMobilCemaco/>
      <div className="topContainer">
        <TopCarousel/>
      </div>
      <Offers/>
      <div className="TopServicesBanners">
        <ServiceBanner id="topService1" colorFont="black" service="Plomería"/>
        <ServiceBanner id="topService2" colorFont="black"  service="Pinturas"/>
      </div>
      
      <div className="Departaments">
        <h2 className="tittle">Navega por departamento</h2>
        <span className="more">Ver todos <img src={MoreIcon}/></span>
        <DepartamentsList/>
      </div>
      <div className="serviceBanner">
        <ServiceBanner id="topService3" colorFont="#ffff"   service="Autos"/>
      </div>
      <ProductCatalog/>
      <Brands/>
      <GroupTools/>
      <div className="bottomBanner">
        <ServiceBanner id="topService4" colorFont="#ffff"  service="Materiales de construcción y acabados "/>
      </div>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
