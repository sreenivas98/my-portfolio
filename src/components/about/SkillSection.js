import React from 'react';
import IconCard from '../IconCard';
import '../CSS/stack.css';

const SkillSection = ({ title, highlight, items }) => (
  <div className="stack-container">
    <p className="stack-heading">
      {title && <span>{title} </span>}
      {highlight && <strong className="strong-text">{highlight}</strong>}
    </p>
    <div className="stack">
      {items.map(({ description, imageSrc, icon: IconComponent, iconColor, variant }, index) => (
        <IconCard
          key={`${description || imageSrc || variant || index}`}
          description={description}
          imageSrc={imageSrc}
          icon={IconComponent}
          iconColor={iconColor}
          variant={variant}
        />
      ))}
    </div>
  </div>
);

export default SkillSection;
