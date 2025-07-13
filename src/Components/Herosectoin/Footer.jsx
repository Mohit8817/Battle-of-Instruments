// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-section">
            <Container>
                <Row className="align-items-start">
                    {/* Neon Left Box */}
                    <Col md={4} sm={12} className="mb-4">
                        <div className="glow-box">
                            <h4 className="logo-text">beatkit</h4>
                            <p className="desc-text">
                                Template Kit for Beat Music or DJ. Futuristic Design and full of light.
                                You can easily start and build your content writing service website
                                with this elementor template kit.
                            </p>
                            <div className="social-icons">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaTwitter />
                            </div>
                        </div>
                    </Col>

                    {/* About Us */}
                    <Col md={4} sm={6} className="mb-4">
                        <h5 className="footer-heading">About Us</h5>
                        <ul className="footer-links">
                            <li>About us</li>
                            <li>Company</li>
                            <li>Sponsorship</li>
                            <li>Tours & Events</li>
                            <li>Careers</li>
                        </ul>
                    </Col>

                    {/* Support */}
                    <Col md={4} sm={6} className="mb-4">
                        <h5 className="footer-heading">Support</h5>
                        <ul className="footer-links">
                            <li>Artist Management</li>
                            <li>Contact Us</li>
                            <li>Community</li>
                            <li>Fans</li>
                            <li>Merchandise</li>
                        </ul>
                    </Col>
                </Row>

                <div className="footer-bottom mt-4 text-center">
                    <p>© 2025 Battle of Instruments | Proudly Powered by YourName</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
