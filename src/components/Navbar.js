// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/navbar.css';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">SSRK</div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">
            <AiOutlineHome className="navbar-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineUser className="navbar-icon" /> About
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineFundProjectionScreen className="navbar-icon" /> Projects
          </Link>
        </li>
        <li>
          <Link to="/">
            <CgFileDocument className="navbar-icon" /> Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
