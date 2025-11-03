// IconCard.js
import React from 'react';
import './CSS/iconCard.css'; // Import the CSS file for styling

const IconCard = ({ imageSrc, icon: IconComponent, iconColor, description, variant }) => {
  const cardClasses = ['icon-card'];
  if (variant) {
    cardClasses.push(`icon-card--${variant}`);
  }

  return (
    <div className={cardClasses.join(' ')}>
      <div className="icon-card-image">
        {IconComponent ? (
          <IconComponent
            className="icon-card-vector"
            aria-hidden="true"
            style={iconColor ? { color: iconColor } : undefined}
          />
        ) : (
          <img src={imageSrc} alt={description} />
        )}
      </div>
      <div className="icon-card-content">
        {description && <p className="icon-card-description">{description}</p>}
      </div>
    </div>
  );
};

export default IconCard;
