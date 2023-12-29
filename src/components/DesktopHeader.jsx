import React from 'react';
import { NavLink } from 'react-router-dom';
import file from '../assets/Ahmed Salah.pdf';


const DesktopHeader = () => {
  return (
    <header className="header" data-aos="slide-down">
    <NavLink to="/"><h1 className="logo">Ahmed</h1></NavLink>
    <nav className="navBar">
      <NavLink to="/" className="header-link">Home</NavLink>
      <NavLink to="About" className="header-link">About</NavLink>
      <NavLink to="works" className="header-link">Works</NavLink>
      <NavLink to="contact" className="header-link">Contact</NavLink>
    </nav>
    <form method="get" action={file}>
      <button type="submit" className="resume">Resume</button>
    </form>
  </header>
  )
}

export default DesktopHeader