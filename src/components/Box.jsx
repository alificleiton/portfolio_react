import React from 'react';
import {Link} from 'react-scroll';

const Box = (props) => {
  return (
    <div className='s-box'>
        <div className='s-b-img'>
          <img src={props.image} alt={props.alte} />
        </div>
        <div className='s-b-text'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab eum quod dolor fuga veritatis facere suscipit necessitatibus quia molestiae?</p>
          <Link to='#'  className='cv-btn'>{props.button}</Link>
        </div>
      
    </div>
  )
}

export default Box
