import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header' data-aos="slide-down">
      <NavLink to="/"><h1 className='logo'>Ahmed</h1></NavLink>
      <nav className='navBar'>
        <NavLink to="/" className="header-link">Home</NavLink>
        <NavLink to="About" className="header-link">About</NavLink>
        <NavLink to="works" className="header-link">Works</NavLink>
        <NavLink to="contact" className="header-link">Contact</NavLink>
      </nav>
      <button type='button' className='resume'>Resume</button>
    </header>
  )
} 

export default Header