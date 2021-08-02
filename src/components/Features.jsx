import React from 'react';
import featuresImage from '../imagens/frame.png';

const Features = () => {
  return (
    <div id='features'>
      <div className='features-model'>
        <img src={featuresImage} alt='logo' />
      </div>
      <div className='features-text'>
        <h2>Features</h2>
        <h3>This Application<span>Software</span> is Art</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, possimus fugiat quasi ea recusandae sequi, repudiandae maiores eius praesentium ipsum, qui pariatur molestias quae? Impedit neque itaque maxime sed consequatur ratione nesciunt ex minus ad voluptatum, aperiam velit nulla magnam.</p>
        <button>View More Features</button>
      </div>
      
    </div>
  )
}

export default Features;
