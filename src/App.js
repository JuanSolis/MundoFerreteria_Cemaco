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
import ProductItem from './components/ProductItem/ProductItem';

function App() {
  return (
    <div className="App">
      <HeaderMobilCemaco/>
      <TopCarousel/>
      <Offers/>
      <div className="TopServicesBanners">
        <ServiceBanner colorFont="black" src={TopService1} service="Plomería"/>
        <ServiceBanner colorFont="black" src={TopService2} service="Pinturas"/>
      </div>
      <div className="Departaments">
        <h2 className="tittle">Navega por departamento</h2>
        <span className="more">Ver todos <img src={MoreIcon}/></span>
        <DepartamentsList/>
      </div>
      <ServiceBanner colorFont="#ffff" src={TopService3} service="Autos"/>
      <ProductItem/>
    </div>
  );
}

export default App;
