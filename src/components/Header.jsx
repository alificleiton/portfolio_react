import React from 'react';
import Navbar from './NavBar';
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <div id='main'>
      <Navbar />
      <div className='name'>
        <h1>It's a <span>ReactJS</span> Website</h1>
        <p className='details'>Most Calendars are designed for teams. This is designed for freelancers who want a simple way to plan their schools</p>
        <div className="header-btns">
          <Link to="#" className='cv-btn'>Hire Me</Link>
          <Link to="#" className='cv-btn1'>Download App</Link>
        </div>
      </div>
      <div className='arrow'></div>
    </div>
  )
}

export default Header
