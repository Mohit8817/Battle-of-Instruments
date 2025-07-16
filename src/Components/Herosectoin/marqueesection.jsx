import React from 'react';

// Top row images
import img1 from '../../assets/gal (1).jpg';
import img2 from '../../assets/gal (2).jpg';
import img3 from '../../assets/gal (3).jpg';
import img4 from '../../assets/gal (4).jpg';
import img5 from '../../assets/gal (5).jpg';
import img13 from '../../assets/djbg.jpg';
import img14 from '../../assets/bgimg.jpg';

// Bottom row images
import img6 from '../../assets/gal (6).jpg';
import img7 from '../../assets/gal (7).jpg';
import img8 from '../../assets/gal (8).jpg';
import img9 from '../../assets/gal (2).jpg';
import img10 from '../../assets/gal (1).jpg';
import img11 from '../../assets/events (5).jpg';
import img12 from '../../assets/festival-slider-backround.jpg';



const topImages = [img1, img2, img3, img4, img5, img13,img1];
const bottomImages = [img6, img7, img8, img9, img10, img11, img12];

const MarqueeSection = () => {
  return (
    <section className="marquee-gallery">
      {/* Top Scrolling Row - Left */}
      <div className="marquee-row left">
        <div className="marquee-track">
          {[...topImages, ...topImages.slice(0, 2)].map((src, index) => (
            <img src={src} alt={`music-top-${index}`} key={`top-${index}`} />
          ))}
        </div>
      </div>

      {/* Bottom Scrolling Row - Right */}
      <div className="marquee-row right">
        <div className="marquee-track">
          {[...bottomImages, ...bottomImages.slice(0, 2)].map((src, index) => (
            <img src={src} alt={`music-bottom-${index}`} key={`bottom-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
