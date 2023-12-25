import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
        <h1 className='logo logo_bottom'>Ahmed</h1>
        <nav className='navBar' id='navFooter'>
        <NavLink to="/" className="header-link">Home</NavLink>
        <NavLink to="/About" className="header-link">About</NavLink>
        <NavLink to="/works" className="header-link">Works</NavLink>
        <NavLink to="/contact" className="header-link">Contact</NavLink>
      </nav>
      <p className='allRights'>&#169; all rights reserved by <span className='name_blue'>Ahmed</span> {year}</p>
    </footer>
  )
}

export default Footer
