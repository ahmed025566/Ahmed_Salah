import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import file from "../assets/Ahmed Salah.pdf"
const MobileHeader = () => {
  return (
    <nav>
      <Link to="/" className='logoLink'><h1 className='logo'>Ahmed</h1></Link>
      <div className="menu-btn">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <div className='slider'>
        <NavLink to="/" className="header-link">Home</NavLink>
        <NavLink to="About" className="header-link">About</NavLink>
        <NavLink to="works" className="header-link">Works</NavLink>
        <NavLink to="contact" className="header-link">Contact</NavLink>
        <form method="get" action={file}>
          <button type="submit" className='resume'>Resume</button>
        </form>
      </div>
    </nav>
  )
}

export default MobileHeader