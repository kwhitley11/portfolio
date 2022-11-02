import React from 'react';
import './navbar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBook} from 'react-icons/bs';
import {RiContactsFill} from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><AiOutlineUser /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBook /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><RiContactsFill /></a>
    </nav>
  )
}

export default Nav