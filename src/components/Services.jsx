import React from 'react';
import Box from './Box';
import image1 from '../imagens/s1.png';
import image2 from '../imagens/s2.png';

const Services = () => {
  return (
    <div id='services'>
        <div className='s-heading'>
          <h1>Services</h1>
          <p>Here are some services i provide</p>
        </div>
        <div className='b-container'>
          <Box image={image1} alte='image1' button='Phyton'/>
          <Box image={image2} alte='image2' button='React'/>
        </div>
    </div>
  )
}

export default Services
