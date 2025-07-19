import React from 'react';

// Top row images
import img1 from '../../assets/i (1).jpg';
import img2 from '../../assets/i (2).jpg';
import img3 from '../../assets/i (3).jpg';
import img4 from '../../assets/i (4).jpg';
import img5 from '../../assets/i (5).jpg';
import img13 from '../../assets/i (6).jpg';
import img14 from '../../assets/i (7).jpg';

// Bottom row images
import img6 from '../../assets/i (8).jpg';
import img7 from '../../assets/i (9).jpg';
import img8 from '../../assets/i (10).jpg';
import img9 from '../../assets/i (11).jpg';
import img10 from '../../assets/i (3).jpg';
import img11 from '../../assets/i (2).jpg';
import img12 from '../../assets/i (1).jpg';



const topImages = [img1, img2, img3, img4, img5, img13, img14];
const bottomImages = [img6, img7, img8, img9, img10, img11, img12];


const Marqueeslid = () => {
  return (
    <div>
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
    
    </div>
  )
}

export default Marqueeslid