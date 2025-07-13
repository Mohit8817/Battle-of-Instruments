import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AlbumPromoSection from './Components/Herosectoin/AlbumPromoSection';
import EventStatsSection from './Components/Herosectoin/EventStatsSection';

import Hero from './Components/Herosectoin/Hero';
import WhatYouWillGet from './Components/Herosectoin/WhatYouWillGet';
import MusicFilledEvents from './Components/Herosectoin/MusicFilledEvents';
import Footer from './Components/Herosectoin/Footer';

function App() {
  return (
    <BrowserRouter basename="/Battle-of-Instruments">
      <Hero />
      <EventStatsSection />
      <WhatYouWillGet />
      <AlbumPromoSection />
      <MusicFilledEvents/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
