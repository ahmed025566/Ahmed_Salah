import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = ({ top, marginTop, left }) => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="footer"
      style={{
        position: 'relative', top, marginTop, left,
      }}
    >
      <h1 className="logo logo_bottom">Ahmed</h1>
      <nav className="navBar" id="navFooter">
        <NavLink to="/" className="header-link">Home</NavLink>
        <NavLink to="/About" className="header-link">About</NavLink>
        <NavLink to="/works" className="header-link">Works</NavLink>
        <NavLink to="/contact" className="header-link">Contact</NavLink>
      </nav>
      <p className="allRights">
        &#169; all rights reserved by
        <span className="name_blue">Ahmed</span>
        {' '}
        {year}
      </p>
    </footer>
  );
};

export default Footer;
