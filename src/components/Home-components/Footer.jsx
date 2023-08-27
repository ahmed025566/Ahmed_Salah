import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
        <h1 className='logo'>Ahmed</h1>
        <nav className='navBar' id='navFooter'>
        <NavLink to="/" className="header-link">Home</NavLink>
        <NavLink to="/About" className="header-link">About</NavLink>
        <NavLink to="/works" className="header-link">Works</NavLink>
        <NavLink to="/contact" className="header-link">Contact</NavLink>
      </nav>
      <p className='allRights'>all rights reserved &#169; 2023</p>
    </footer>
  )
}

export default Footer
