import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AlbumPromoSection from './Components/Herosectoin/AlbumPromoSection';
import EventStatsSection from './Components/Herosectoin/EventStatsSection';
import ArtistCarousel from './Components/Herosectoin/ArtistCarousel';

import Hero from './Components/Herosectoin/Hero';
import WhatYouWillGet from './Components/Herosectoin/WhatYouWillGet';
import ServicesSection from './Components/Herosectoin/ServicesSection';
import MusicFilledEvents from './Components/Herosectoin/MusicFilledEvents';
import StudioServices from './Components/Herosectoin/StudioServices';
import Footer from './Components/Herosectoin/Footer';

function App() {
  useEffect(() => {
    AOS.init();
    document.title = "Battle of Instruments";
  }, []);
  return (
    <BrowserRouter basename="/Battle-of-Instruments">
      <Hero />
      <EventStatsSection />
      <AlbumPromoSection />
      <ServicesSection />
      <MarqueeSection />
      <WhatYouWillGet />
      <MusicFilledEvents />
      <ArtistCarousel />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
