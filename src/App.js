import './App.css';
import HeaderMobilCemaco from './components/HeaderMobilCemaco/HeaderMobilCemaco';
import TopCarousel from './components/TopCarousel/TopCarousel';
import Offers from './components/Offers/Offers';
import ServiceBanner from './components/ServiceBanner/ServiceBanner';
import TopService1 from './img/847556.png';
import TopService2 from './img/MaskGroup2214.png';
import TopService3 from './img/PreparaTuAuto1.png';
import MoreIcon from './img/Icono-FlechaVermásTexto-Cemaco.svg';
import DepartamentsList from './components/DepartamentsList/DepartamentsList';
import ProductCatalog from './components/ProductCatalog/ProductCatalog';
import Brands from './components/Brands/Brands';
import GroupTools from './components/GroupTools/GroupTools';
import bottomBanner from './img/MaskGroup120.png';
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
        <ServiceBanner colorFont="black" src={TopService1} padding="14px 0 0 16px" service="Plomería"/>
        <ServiceBanner colorFont="black" src={TopService2} padding="14px 0 0 16px" service="Pinturas"/>
      </div>
      <div className="Departaments">
        <h2 className="tittle">Navega por departamento</h2>
        <span className="more">Ver todos <img src={MoreIcon}/></span>
        <DepartamentsList/>
      </div>
      <div className="serviceBanner">
        <ServiceBanner colorFont="#ffff" src={TopService3} padding="14px 0 0 16px" service="Autos"/>
      </div>
      <ProductCatalog/>
      <Brands/>
      <GroupTools/>
      <div className="bottomBanner">
        <ServiceBanner colorFont="#ffff" src={bottomBanner} padding="14px 0 0 14px" service="Materiales de construcción y acabados "/>
      </div>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
