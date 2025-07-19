// src/components/EventStatsSection.js
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../assets/img1 (1).png';
import img2 from '../../assets/img1 (2).png';
import img3 from '../../assets/img1 (3).png';
import img4 from '../../assets/img1 (4).png';
// import img5 from '../../assets/img1 (5).png'; 

const EventStatsSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const images = container.querySelectorAll('.circle-img');
            images.forEach((img, index) => {
                const speed = (index + 1) * 0.02; // each image moves differently
                img.style.transform = `translate(${-x * speed}px, ${-y * speed}px)`;
            });
        };

        const container = containerRef.current;
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="event-stats-section text-white bg-purple py-5">
            <Container fluid>
                <Row className="justify-content-center text-center">
                    <Col md={6} className="mt-5 p-4">
                        <Row className="justify-content-center text-center">
                            <Col xs={6} md={6} className="mb-3">
                                <h2 className="highlight-text">1,500+</h2>
                                <p className="label-text">Attendees</p>
                            </Col>
                            <Col xs={6} md={6} className="mb-3">
                                <h2 className="highlight-text">100+</h2>
                                <p className="label-text">Speakers</p>
                            </Col>
                            <Col xs={6} md={6}>
                                <h2 className="highlight-text">200+</h2>
                                <p className="label-text">Sessions</p>
                            </Col>
                            <Col xs={6} md={6}>
                                <h2 className="highlight-text">8HR</h2>
                                <p className="label-text">Workshops</p>
                            </Col>
                        </Row>

                        <p className="desc-text mt-4">
                            Join 400+ music lovers in Manhattan, NY for an unforgettable day of live performances,
                            exclusive artist sessions, and new connections at the ultimate festival for music enthusiasts.
                        </p>

                        <p className="cta-text">Let's join together</p>
                    </Col>

                    <Col md={6} className="image-stack d-none d-md-block position-relative" ref={containerRef}>
                        <img data-aos="zoom-in" data-aos-duration="1000" src={img1} alt="img1" className="circle-img small" />
                        <img data-aos="Zoom-in" data-aos-duration="2000" src={img2} alt="img2" className="circle-img medium" />
                        <img data-aos="zoom-in" data-aos-duration="500" src={img3} alt="img3" className="circle-img large" />
                        <img data-aos="zoom-in" data-aos-duration="1500" src={img4} alt="img4" className="circle-img extra" />
                       
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EventStatsSection;