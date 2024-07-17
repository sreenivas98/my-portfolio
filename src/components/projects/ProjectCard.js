import React from 'react';
import '../CSS/projectCard.css'; // Import custom CSS for styling
import { FaGithub } from 'react-icons/fa6';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const ProjectCard = (props) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={props.image} alt={props.title} className="card-image" />
      </div>
      <div className="card-content-container">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-content">{props.description}</p>
        <p className="card-content"><strong>Tech Stack:</strong> {props.techStack}</p>
        <div className="card-buttons">
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <button className="card-button">
              <FaGithub /> Github
            </button>
          </a>
          {props.demo && (
            <a href={props.demo} target="_blank" rel="noopener noreferrer">
              <button className="card-button">
                <AiOutlineFundProjectionScreen /> Demo Link
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
