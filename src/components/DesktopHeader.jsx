import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import file from '../assets/Ahmed Salah.pdf';


const DesktopHeader = () => {

  const [background, setBackground] = useState('rgba(0, 0, 0, .00)'); 
  useEffect(() => {
    const handleScroll = () => {
      const newScroll = window.scrollY;
      let alpha =  newScroll <= 60 ? `.${newScroll}` : '.60'
      setBackground(`rgba(0, 0, 0, ${alpha})`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

  return (
    <header className="header" style={{background:  background}} data-aos="slide-down">
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