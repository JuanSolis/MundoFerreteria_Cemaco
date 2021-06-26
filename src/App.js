import './App.css';
import HeaderMobilCemaco from './components/HeaderMobilCemaco/HeaderMobilCemaco';
import TopCarousel from './components/TopCarousel/TopCarousel';
import Offers from './components/Offers/Offers';
import ServiceBanner from './components/ServiceBanner/ServiceBanner';
import TopService1 from './img/847556.png';
import TopService2 from './img/MaskGroup2214.png';

function App() {
  return (
    <div className="App">
      <HeaderMobilCemaco/>
      <TopCarousel/>
      <Offers/>
      <div className="TopServicesBanners">
        <ServiceBanner src={TopService1} service="Plomería"/>
        <ServiceBanner src={TopService2} service="Pinturas"/>
      </div>
    </div>
  );
}

export default App;
