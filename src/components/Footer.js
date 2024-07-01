// src/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
            <p className="text-content">Designed and Developed by Sai Sreenivas Reddy Karra</p>
        </div>
        <div className="footer-section">
            <p className="text-content">Copyright © 2024 SSRK</p>
        </div>
        <div className="footer-section">
            <div className="social-icons">
                <ul>
                    <li>
                        <a href="https://github.com/sreenivas98" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sai-sreenivas-reddy-k" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sreenivas_karra" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/sri.vatsava.15/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:srivatsava.sai@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
