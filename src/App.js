import './App.css';
import AlbumPromoSection from './Components/Herosectoin/AlbumPromoSection';
import EventStatsSection from './Components/Herosectoin/EventStatsSection';

import Hero from './Components/Herosectoin/Hero';
import WhatYouWillGet from './Components/Herosectoin/WhatYouWillGet';

function App() {
  return (
    <div className="">
      <Hero />
      <EventStatsSection />
      <WhatYouWillGet />
      <AlbumPromoSection />
    </div>
  );
}

export default App;
