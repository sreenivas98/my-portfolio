// IconCard.js
import React from 'react';
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './CSS/home.css';
import HomeImgTop from '../Assets/homeImg.png';
import ProfilePic from '../Assets/profilePic.png';


const Home = () => {
  return (
    <div className="home-page">
        <div className="container">
            <div className="text-column">
                <p className="intro-text">Hello!
                    <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                    </span>
                </p>
                <p className="intro-text">
                    I'M <strong className="anime-effect">Sai Sreenivas Reddy Karra</strong>
                </p>
                <div className='typewriter-text'>
                    <Typewriter
                        options={{
                        strings: [
                        "Software Developer",
                        "Java Full Stack Developer",
                        "AWS Certified Developer Associate",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        }}
                    />
                </div>
            </div>
            <div className="image-column">
                <img src={HomeImgTop} alt="Profile" className="home-img-top"/>
            </div>
        </div>
        <div className="container">
            <div className="text-column">
                <p className="header">LET ME <strong className="strong-text">INTRODUCE</strong> MYSELF</p>
                <div className="summary">
                    <p>
                        I fell in love with coding during my bachelors and I have learned a lot from then, I believe ... 🤷‍♂️
                    </p>
                    <p>
                        I have a strong command of programming languages such as <strong className="strong-text">Java</strong>, <strong className="strong-text">Python</strong>, and <strong className="strong-text">JavaScript</strong>.
                    </p>
                    <p>
                        My interests include developing innovative <strong className="strong-text">web applications and products</strong>, as well as exploring <strong className="strong-text">machine learning</strong> technologies.
                    </p>
                    <p>
                        Whenever possible, I channel my enthusiasm into developing products using <strong className="strong-text">Java</strong>, <strong className="strong-text">Python</strong>, and <strong className="strong-text">modern JavaScript libraries and frameworks</strong> like <strong className="strong-text">React.js</strong>.
                    </p>
                </div>
            </div>
            <div className="image-column">
                <Tilt>
                    <img src={ProfilePic} alt="Profile" className="profile-pic"/>
                </Tilt>
            </div>
        </div>
        <div className="social-icons">
            <p className="contact-header">FIND ME ON</p>
            <p className="contact-text">Feel free to <strong className="anime-effect">connect</strong> with me on</p>
            <ul className="connect-icons">
                <li>
                    <a href="https://github.com/sreenivas98" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="contact-icon" size={30}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sai-sreenivas-reddy-k" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="contact-icon" size={30}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/sreenivas_karra" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="contact-icon" size={30}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/sri.vatsava.15/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="contact-icon" size={30}/>
                    </a>
                </li>
                <li>
                    <a href="mailto:srivatsava.sai@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="contact-icon" size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Home;
