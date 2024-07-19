// IconCard.js
import React from 'react';
import './CSS/iconCard.css'; // Import the CSS file for styling

const IconCard = ({ imageSrc, description }) => {
  return (
    <div className="icon-card">
      <div className="icon-card-image">
        <img src={imageSrc} alt={description} />
      </div>
      <div className="icon-card-content">
        <p className="icon-card-description">{description}</p>
      </div>
    </div>
  );
};

export default IconCard;
