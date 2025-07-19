import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AlbumPromoSection from './Components/Herosectoin/AlbumPromoSection';
import EventStatsSection from './Components/Herosectoin/EventStatsSection';
import ArtistCarousel from './Components/Herosectoin/ArtistCarousel';

import Hero from './Components/Herosectoin/Hero';
import WhatYouWillGet from './Components/Herosectoin/WhatYouWillGet';
import MusicFilledEvents from './Components/Herosectoin/MusicFilledEvents';
import MusicEventForm from './Components/Herosectoin/MusicEventForm';
import StudioServices from './Components/Herosectoin/StudioServices';
import Footer from './Components/Herosectoin/Footer';
import AOS from 'aos';
import { useEffect } from 'react';
import Marqueeslid from './Components/Herosectoin/Marqueeslid';

function App() {
  useEffect(() => {
    AOS.init();
    document.title = "Battle of Instruments";
    // eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter basename="/Battle-of-Instruments">
      <Hero />
      <EventStatsSection />
      <AlbumPromoSection />
      {/* <MarqueeSection /> */}
      <Marqueeslid />
      <WhatYouWillGet />
      <MusicFilledEvents />
      <ArtistCarousel />
      <StudioServices />
      <MusicEventForm />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
