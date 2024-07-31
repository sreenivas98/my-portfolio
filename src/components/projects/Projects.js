import React, {useState} from 'react';
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import IconCard from '../IconCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Imports of project related pictures
import Project1 from '../../Assets/projects/Project1.png'
import Project2 from '../../Assets/projects/Project2.png';
import Project3 from '../../Assets/projects/Project3.png';
import Project4 from '../../Assets/projects/Project4.png';

// Imports of Tool Stack images
import Windows from '../../Assets/toolStack/windows.png';
import VScode from '../../Assets/toolStack/VSCode.png';
import Github from '../../Assets/toolStack/github.png';
import IOS from '../../Assets/toolStack/IOS.png';

import '../CSS/projects.css'; // Custom CSS for carousel

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    customPaging: function(i) {
      return (
        <div className={`dots ${i === currentSlide ? 'active' : ''}`}>
          <p>{i+1}</p>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    speed: 500,
    adaptiveHeight: true,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    }
  };

  return (
    <div>
      <p className="page-title">MY RECENT PROJECTS</p>
      <p className="page-info">Here are some of my recent projects that I have worked on.</p>
      <p className="meme-effect">Don't mind the added animation—it's just the website doing its disco dance routine!</p>
      <Slider  {...settings}>
        <ProjectCard
          title="Personal Portfolio Page"
          image={Project1}
          description="This responsive portfolio page, created with React.js, HTML, and CSS, provides an interactive single-page application experience. It consists of three main sections: Nav, Main, and Footer. The Navbar includes links to Home, About, Projects, and Resume. The Main section dynamically displays the corresponding content based on the selected navigation link. The Footer, along with the Home section, offers links for following and contacting via GitHub, Instagram, LinkedIn, and email, alongside copyright information, ensuring comprehensive engagement and connectivity."
          techStack="React JS, HTML, CSS, VS Code, GitHub"
          github="https://github.com/sreenivas98/my-portfolio"
          demo="https://sreenivas98.github.io/my-portfolio"
        />
        <ProjectCard
          title="Little Lemon Landing Page"
          image={Project2}
          description="The Little Lemon website informs visitors about its authentic Indian and Italian cuisine. It includes a logo and a menu with Home, Menu, Book, and About sections (some links may not work). A promotional banner advertises a 25% discount with a promo code (added animation - rainbow effect on the text shadow on text in promotional banner). The articles cover the new menu, booking options, and hours. The About section describes the restaurant's focus, location, and links to social media. The footer has copyright info. The main focus of this page is to show responsive design."
          techStack="HTML, CSS, Git, VS Code, GitHub"
          github="https://github.com/sreenivas98/"
          demo="https://sreenivas98.github.io/Little_Lemon/"
        /> 
        <ProjectCard
          title="Simple Calculator"
          image={Project3}
          description="This simple calculator app, designed using React and the useState hook, offers a user-friendly interface with essential arithmetic functionalities. It features four buttons for addition, subtraction, multiplication, and division, along with a text box for inputting numbers. The app includes a reset button to clear the result and another to reset the input field. The current result, displayed in a paragraph element starting at 0, updates dynamically based on user interactions. Additionally, the app alerts the user if an attempt is made to divide by 0 and confirms with the user before multiplying the current result by 0."
          techStack="React JS, HTML, CSS, VS Code, GitHub"
          github="https://github.com/sreenivas98/react-calculator"
          demo="https://sreenivas98.github.io/react-calculator/"
        />  
        <ProjectCard
          title="ArduPlane Drone Remote Control IOS Application"
          image={Project4}
          description="This project enables the complete control of a drone using iOS devices. Developed with React Native and Flask, the app communicates with the drone through the dronekit-sitl library. The app features joystick controls for adjusting throttle, pitch, yaw, and roll, along with an arm button, offering an intuitive user experience. The project focuses on consistency and accessibility, with mechanisms for error prevention and user feedback to ensure reliable and smooth drone operation. This combination of advanced simulation and user-friendly design makes it suitable for both novice and experienced users."  
          techStack="React Native, Python, Flask WebServices Framework, VS Code, GitHub"
          github="https://github.com/sreenivas98/react-calculator"
        />
      </Slider>
      <p className="common-tools">COMMON TOOLS USED</p>
      <div className="tool-stack">
        <IconCard
          imageSrc={Windows}
          description="Windows OS"
        />
        <IconCard
          imageSrc={VScode}
          description="VS Code"
        />
        <IconCard
          imageSrc={Github}
          description="GitHub"
        />
        <IconCard
          imageSrc={IOS}
          description="Apple IOS"
        />
      </div>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 ,position: "absolute"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1,position: "absolute" }}
      onClick={onClick}
    />
  );
}

export default Projects;
