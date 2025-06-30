import React from 'react';
import bgImage from '../../assets/background_01.jpg';
import gifImage from '../../assets/Battle-of-instruments-500-x-300-px.gif';

const Hero = () => {
    return (
        <div
            className="container-fluid hero-bg text-white position-relative"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Top Centered GIF */}
            <img
                src={gifImage}
                alt="Battle of Instruments"
                className="top-center-gif"
            />

            <div
                className="d-flex flex-column align-items-center justify-content-center text-center"
                style={{ minHeight: '100vh' }}
            >
                {/* Music-Themed Heading */}
                <div className="position-relative">
                    <h1 className="position-relative fw-bold heroheading">BATTLE OF INSTRUMENTS</h1>
                </div>

                {/* Music Description */}
                <p className="mt-4  fw-medium px-3">
                    A high-voltage face-off of rhythm, melody, and beats. Experience the <br /> ultimate fusion of live bands, DJ sets, and musical showdowns.
                </p>
            </div>
        </div>
    );
};

export default Hero;
