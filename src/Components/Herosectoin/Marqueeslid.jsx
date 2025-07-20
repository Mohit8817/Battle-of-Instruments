import React from 'react';

// Top row images
import img1 from '../../assets/i (1).jpg';
import img2 from '../../assets/i (2).jpg';
import img3 from '../../assets/i (3).jpg';
import img4 from '../../assets/i (4).jpg';
import img5 from '../../assets/i (5).jpg';
import img6 from '../../assets/i (7).jpg';
import img7 from '../../assets/i (7).jpg';
import img8 from '../../assets/i (7).jpg';
import img9 from '../../assets/i (7).jpg';
import img10 from '../../assets/i (7).jpg';
import img11 from '../../assets/i (7).jpg';
import img12 from '../../assets/i (7).jpg';
import img13 from '../../assets/i (7).jpg';
import img14 from '../../assets/i (7).jpg';
import img15 from '../../assets/i (7).jpg';
import img16 from '../../assets/i (7).jpg';

// Bottom row images
import img17 from '../../assets/i (9).jpg';
import img18 from '../../assets/i (10).jpg';
import img19 from '../../assets/i (11).jpg';
import img20 from '../../assets/i (3).jpg';
import img21 from '../../assets/i (2).jpg';
import img22 from '../../assets/i (1).jpg';
import img23 from '../../assets/i (1).jpg';
import img24 from '../../assets/i (1).jpg';
import img25 from '../../assets/i (1).jpg';
import img26 from '../../assets/i (1).jpg';
import img27 from '../../assets/i (1).jpg';
import img28 from '../../assets/i (1).jpg';
import img29 from '../../assets/i (1).jpg';
import img30 from '../../assets/i (1).jpg';
import img31 from '../../assets/gal (2).jpg';
import img32 from '../../assets/gal (3).jpg';



const topImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];
const bottomImages = [img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32];


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