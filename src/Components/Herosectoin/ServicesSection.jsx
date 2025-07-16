import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGlassCheers,
  FaMicrophoneAlt,
  FaCompactDisc,
  FaPenNib,
  FaCocktail,
  FaStar,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlassCheers />,
    title: "Corporate Events",
    desc: "Creativity corporate events from concept and design, right through to production and management of the event itself.",
  },
  {
    icon: <FaMicrophoneAlt />,
    title: "Branded Events",
    desc: "Our branded events provide unmatched opportunities for you to interact with customers make the brand even stronger and recognizable.",
  },
  {
    icon: <FaCompactDisc />,
    title: "Comercial Shoots",
    desc: "We provide productions services for commercials, branded media, film/TV or documentary shoots in many pavilions.",
  },
  {
    icon: <FaPenNib />,
    title: "Hen Parties",
    desc: "Create hen party memories that will last a lifetime with our the hen party specialists.",
  },
  {
    icon: <FaCocktail />,
    title: "Birthday Parties",
    desc: "Our birthday party services include live DJs, dancing, bottle service and much more.",
  },
  {
    icon: <FaStar />,
    title: "VIP Service",
    desc: "From individual club VIP packages and bottle services to closed exclusive parties.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-5 text-white">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="service_head">Our Services</h2>
          <p className="lead">
            Explore the range of premium services we offer to make your music events unforgettable. From corporate gatherings to exclusive VIP nights – we’ve got it all covered.
          </p>
        </div>

        {/* Services Grid */}
        <Row>
          {services.map((service, index) => (
            <Col md={4} sm={6} key={index} className="mb-4">
              <div className="service-card d-flex">
                <div className="icon-circle">{service.icon}</div>
                <div className="ms-3">
                  <h5 className="service-title">{service.title.toUpperCase()}</h5>
                  <p className="service-desc">{service.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
