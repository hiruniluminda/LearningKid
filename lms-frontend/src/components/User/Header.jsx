// src/components/Header.js
import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header clearfix" role="header">
      <div className="logo">
        <a href="#"><em>Study</em> Genius</a>
      </div>
      <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
      <nav id="menu" className="main-nav" role="navigation">
        <ul className="main-menu">
          <li><a href="#top">Home</a></li>
          <li><a href="#section2">About Us</a></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><a href="#section6">Contact</a></li>
          {/* <li><a href="https://templatemo.com" className="external">External</a></li> */}
        </ul>
      </nav>
    </header>
  )

};

export default Header;
