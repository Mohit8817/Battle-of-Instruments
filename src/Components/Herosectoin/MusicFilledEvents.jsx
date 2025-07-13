import React from "react";
import img1 from "../../assets/events (1).jpg";
import img2 from "../../assets/events (3).jpg"; 
import img3 from "../../assets/events (4).jpg";
const events = [
    {
        title: "4th Edition",
        desc: "In its fourth edition, Battle of Instrument emerged with even more musical firepower and breathtaking performances from instrumentalists across the world.",
        image: img1, // Replace with your actual path
    },
    {
        title: "Global Talent Program",
        desc: "A program designed to showcase talent from all over the world, featuring solo battles, collaborations, and themed instrument showcases.",
        image: img2,
    },
    {
        title: "Street Music Festival",
        desc: "Live fusion performances, percussion face-offs, and jam sessions conducted in cities, bringing instrumental energy to public spaces.",
        image: img3,
    },
];

const MusicFilledEvents = () => {
    return (
        <div className="music-events-section">
            <div className="left-content">
                <h2>Music filled<br />events</h2>
                <p>
                    Battle of Instrument brings together instrumental artists from across the globe. We create unforgettable musical events—from weddings to international showcases.
                </p>
                <button className="browse-btn">Browse Events →</button>
            </div>
            <div className="events-grid">
                {events.map((event, idx) => (
                    <div className="event-card" key={idx}>
                        <img src={event.image} alt={event.title} />
                        <h4>{event.title}</h4>
                        <p>{event.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MusicFilledEvents;
