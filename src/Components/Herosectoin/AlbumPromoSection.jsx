// src/components/AlbumPromoSection.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import albumCover from '../../assets/h-album-playlist-holder.jpg';

const AlbumPromoSection = () => {
    return (
        <div className="album-section text-white">
            <Container fluid>
                <Row className="align-items-center">
                    {/* Left Side - Album Image */}
                    <Col md={6} className="p-0" >
                        <img src={albumCover} data-aos="zoom-in-right" data-aos-duration="2000" alt="Album Cover" className="img-fluid w-80 h-100 album-img" />
                    </Col>

                    {/* Right Side - Text Content */}
                    <Col md={6} className="px-5 py-5">
                        <p className="text-uppercase small">Enjoy My New Album</p>
                        <h1 className="fw-bold albumtext mb-3">Play The Rubicon<br />Purchase Now.</h1>
                        <div className="underline mb-3"></div>
                        <p className="lead">
                            Join us for the most electrifying musical showdown of the year — Battle of the Instruments! Witness an epic clash as musicians go head-to-head, not with words, but with strings, beats, keys, and melodies. Guitars will shred, drums will thunder, violins will soar, and keys will mesmerize. This isn’t just a concert — it’s a war of talent, passion, and pure musical fire.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AlbumPromoSection;
