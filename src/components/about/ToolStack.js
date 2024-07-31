import React from 'react';
import IconCard from '../IconCard';
import '../CSS/stack.css';

// Imports of Tool Stack images
import Windows from '../../Assets/toolStack/windows.png';
import VScode from '../../Assets/toolStack/VSCode.png';
import Eclipse from '../../Assets/toolStack/Eclipse.png';
import Netbeans from '../../Assets/toolStack/Netbeans.png';
import Postman from '../../Assets/toolStack/Postman.png';
import Github from '../../Assets/toolStack/github.png';
import Teams from '../../Assets/toolStack/Teams.png';
import Slack from '../../Assets/toolStack/Slack.png';
import Jira from '../../Assets/toolStack/Jira.png';
import Confluence from '../../Assets/toolStack/Confluence.png';

const ToolStack = () => {
  return (
    <div className="stack-container">
      <p className="stack-heading"><strong className="strong-text">TOOLS</strong> I USE</p>
      <div className="stack">
        <IconCard
          imageSrc={Windows}
          description="Windows OS"
        />
        <IconCard
          imageSrc={VScode}
          description="VS Code"
        />
        <IconCard
          imageSrc={Eclipse}
          description="Eclipse IDE"
        />
        <IconCard
          imageSrc={Netbeans}
          description="NetBeans IDE"
        />
        <IconCard
          imageSrc={Postman}
          description="Postman"
        />
        <IconCard
          imageSrc={Github}
          description="GitHub"
        />
        <IconCard
          imageSrc={Teams}
          description="Microsoft Teams"
        />
        <IconCard
          imageSrc={Slack}
          description="Slack"
        />
        <IconCard
          imageSrc={Jira}
          description="Jira"
        />
        <IconCard
          imageSrc={Confluence}
          description="Confluence"
        />
      </div>
    </div>
  );
};

export default ToolStack;
