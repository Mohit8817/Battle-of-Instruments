import React from 'react';
import { Container } from 'react-bootstrap';

const MusicEventForm = () => {
    return (
        <div className="music-form-section">
            <Container>
                <div className="text-center mb-4">
                    <h2 className="form-heading">Music Event Reservation</h2>
                    <p className="form-subtitle">
                        Join the Rhythm – Book Your Seat for the Ultimate Music Experience!
                    </p>
                </div>

                <div className="music-event-form">
                    <form>
                        <div className="form-row">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="tel" placeholder="Phone" required />
                        </div>

                        <div className="form-row">
                            <input type="text" placeholder="Event (e.g., Concert, DJ Night)" required />
                            <input type="date" required />
                            <input type="number" placeholder="Your Age" min="1" required />
                        </div>

                        <div className="form-row">
                            <select required>
                                <option value="">Select Instrument</option>
                                <option value="Guitar">Guitar</option>
                                <option value="Piano">Piano</option>
                                <option value="Drums">Drums</option>
                                <option value="Violin">Violin</option>
                                <option value="Flute">Flute</option>
                            </select>
                        </div>

                        <textarea placeholder="Comment or special requests"></textarea>

                        <div className="submit-btn-wrapper">
                            <button type="submit">
                                MAKE AN ORDER <span>&#10140;</span>
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default MusicEventForm;
