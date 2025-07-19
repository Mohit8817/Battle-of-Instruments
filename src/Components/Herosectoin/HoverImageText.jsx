// src/components/HoverImageText.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HoverImageText = ({ text, imageUrl, bodyText }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`position-relative overflow-hidden shadow col-md-3 ${hovered ? 'hovered-rounded' : 'default-rounded'}`}
      // data-aos="zoom-in"
      // data-aos-easing="linear"
      // data-aos-duration="1000"
      style={{ width: '500px', height: '620px', cursor: 'pointer', transition: 'all 0.5s ease-in-out' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* Image */}
      <motion.img
        src={imageUrl}
        alt="Img"
        className={`w-100 h-100 object-fit-cover ${hovered ? 'blurred' : ''}`}
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
      />


      {/* Overlay Text */}
      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: hovered ? 1 : 0,
          y: hovered ? 0 : 20,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className='px-4 text-center'>
        <h1 className="text-white fw-bold">{text}</h1>
        <br /><br />
        <h4 className='text-white'>{bodyText}</h4>
        <br /><br />
        <a href="#" className="text-white fs-5 text-decoration-none fw-bold">Read More...</a>
        </div>
      </motion.div>
    </div>
  );
};

export default HoverImageText;
