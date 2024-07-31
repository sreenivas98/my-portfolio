import React from 'react';
import IconCard from '../IconCard';
import '../CSS/stack.css';

// Imports of Tech Stack images
import Java from '../../Assets/techStack/Java.png';
import Python from '../../Assets/techStack/Python.png';
import CS from '../../Assets/techStack/CS.png';
import Html from '../../Assets/techStack/Html.png';
import CSS from '../../Assets/techStack/CSS.png';
import JS from '../../Assets/techStack/JS.png';
import MySQL from '../../Assets/techStack/MySQL.png';
import DB2 from '../../Assets/techStack/DB2.png';
import MSSQL from '../../Assets/techStack/MSSQL.png';
import Postgre from '../../Assets/techStack/Postgre.png';
import Spring from '../../Assets/techStack/Spring.png';
import Microservices from '../../Assets/techStack/Microservices.png';
import Rest from '../../Assets/techStack/Rest.png';
import Json from '../../Assets/techStack/Json.png';
import ReactLogo from '../../Assets/techStack/React.png';
import Maven from '../../Assets/techStack/Maven.png';
import Git from '../../Assets/techStack/Git.png';
import AWS from '../../Assets/techStack/AWS.png';

const TechStack = () => {
  return (
    <div className="stack-container">
      <p className="stack-heading">PROFESSIONAL <strong className="strong-text">SKILL SET</strong></p>
      <div className="stack">
        <IconCard
          imageSrc={Java}
          description="Java"
        />
        <IconCard
          imageSrc={Python}
          description="Python"
        />
        <IconCard
          imageSrc={CS}
          description="C#"
        />
        <IconCard
          imageSrc={Html}
          description="HTML 5"
        />
        <IconCard
          imageSrc={CSS}
          description="CSS 3"
        />
        <IconCard
          imageSrc={JS}
          description="JavaScript"
        />
        <IconCard
          imageSrc={MySQL}
          description="MySQL"
        />
        <IconCard
          imageSrc={MSSQL}
          description="Microsoft SQL"
        />
        <IconCard
          imageSrc={DB2}
          description="IBM DB2"
        />
        <IconCard
          imageSrc={Postgre}
          description="Postgre SQL"
        />
        <IconCard
          imageSrc={Spring}
          description="Spring"
        />
        <IconCard
          imageSrc={Microservices}
          description="Microservices"
        />
        <IconCard
          imageSrc={Rest}
          description="Rest API's"
        />
        <IconCard
          imageSrc={Json}
          description="JSON"
        />
        <IconCard
          imageSrc={ReactLogo}
          description="React JS"
        />
        <IconCard
          imageSrc={Maven}
          description="Maven"
        />
        <IconCard
          imageSrc={Git}
          description="Git"
        />
        <IconCard
          imageSrc={AWS}
          description="AWS"
        />
      </div>
    </div>
  );
};

export default TechStack;
