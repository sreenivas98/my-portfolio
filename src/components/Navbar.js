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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link className="navbar-logo-link" to="/">
        <div className="navbar-logo">SSRK</div>
      </Link>
      <div className="navbar-burger" onClick={toggleMenu}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            <AiOutlineHome className="navbar-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            <AiOutlineUser className="navbar-icon" /> About
          </Link>
        </li>
        <li>
          <Link to="/Projects" onClick={closeMenu}>
            <AiOutlineFundProjectionScreen className="navbar-icon" /> Projects
          </Link>
        </li>
        <li>
          <Link to="/Resume" onClick={closeMenu}>
            <CgFileDocument className="navbar-icon" /> Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
