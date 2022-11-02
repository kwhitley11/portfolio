import React from 'react';
import './header.css';
import logo from '../assets/logo/png/kw_logo_transparent.png';

const Header = () => {
  return (
    <div className="header__container">
      <h1>Hello, I am Kyle Whitley</h1>
      <div className="header__container-image">
        <img src={logo}></img>
      </div>
      <div className="header__container-links">
        <a href='../assets/resume/resume.pdf' target='_blank'>Download CV</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  )
}

export default Header