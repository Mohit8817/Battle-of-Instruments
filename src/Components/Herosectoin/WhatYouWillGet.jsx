// src/components/WhatYouWillGet.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserTie, FaGlobe, FaUsers, FaFlagCheckered } from 'react-icons/fa';

const WhatYouWillGet = () => {
    return (
        <section className="py-5 text-center will-get-section">
            <Container>
                <p className="text-uppercase">Magic is believing in yourself.</p>
                <h2 className="fw-bold display-4 crdheading">
                    What you will get?
                </h2>
                <div className="underline mx-auto my-3" />

                <Row className="mt-5">
                    <Col md={3} sm={6} xs={12} className="mb-4">
                        <FaUserTie size={60} className="mb-3" />
                        <h4 className="fw-bold">Visionary Speaker</h4>
                        <p className="will-get-card-para">
                            Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache.
                        </p>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="mb-4">
                        <FaGlobe size={60} className="mb-3" />
                        <h4 className="fw-bold">Worldwide Events</h4>
                        <p className="will-get-card-para">
                            Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache.
                        </p>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="mb-4">
                        <FaUsers size={60} className="mb-3" />
                        <h4 className="fw-bold">Level-up Your Skills</h4>
                        <p className="will-get-card-para">
                            Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache.
                        </p>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="mb-4">
                        <FaFlagCheckered size={60} className="mb-3" />
                        <h4 className="fw-bold">Help Find Your Tribe</h4>
                        <p className="will-get-card-para">
                            Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhatYouWillGet;
