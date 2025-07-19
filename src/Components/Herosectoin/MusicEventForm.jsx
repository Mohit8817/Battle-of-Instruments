import React from 'react';
import { Container } from 'react-bootstrap';

const MusicEventForm = () => {
    return (
        <div
            className="music-form-section"

        >
            <Container>
                <div className="text-center mb-4">
                    <h2 className="form-heading">Music Event Reservation</h2>
                    <p className="form-subtitle">
                        Book your seat for an unforgettable night of music and magic!
                    </p>
                </div>

                <div className="music-event-form">
                    <form>
                        <div className="form-row">
                            <input type="text" placeholder="Your name" required />
                            <input type="email" placeholder="Your email" required />
                            <input type="tel" placeholder="Phone" required />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Event (e.g., Concert, DJ Night)" required />
                            <input type="date" required />
                            <input type="number" placeholder="Amount of people" min="1" required />
                        </div>
                        <textarea placeholder="Comment or special requests"></textarea>
                        <div className="submit-btn-wrapper">
                            <button type="submit">MAKE AN ORDER <span>&#10140;</span></button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default MusicEventForm;
