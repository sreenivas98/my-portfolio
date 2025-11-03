import '../CSS/about.css';
import {
  SiAmazonaws,
  SiAmazondocumentdb,
  SiAmazondynamodb,
  SiApachemaven,
  SiAtlassian,
  SiAzuredevops,
  SiConfluence,
  SiCss3,
  SiCsharp,
  SiDocker,
  SiDotnet,
  SiEclipseide,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJson,
  SiGraphql,
  SiHibernate,
  SiHtml5,
  SiIbm,
  SiJavascript,
  SiJira,
  SiKubernetes,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiOracle,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiSpring,
  SiTerraform,
} from 'react-icons/si';
import ToolStack from './ToolStack';
import SkillSection from './SkillSection';
import awsCloudDevBadge from '../../Assets/earnedBadges/awsCloudDevBadge.png';
import { FaMugHot, FaProjectDiagram, FaSoap } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
import { AiOutlineFileText } from 'react-icons/ai';

const certificationItems = [
  {
    description: '',
    imageSrc: awsCloudDevBadge,
    variant: 'badge',
  },
];

const languageSkills = [
  { description: 'Java', icon: DiJava, iconColor: '#007396' },
  { description: 'Python', icon: SiPython, iconColor: '#3776AB' },
  { description: 'C#', icon: SiCsharp, iconColor: '#512BD4' },
  { description: 'JavaScript (ES6+)', icon: SiJavascript, iconColor: '#323330' },
  { description: 'HTML5', icon: SiHtml5, iconColor: '#C63D25' },
  { description: 'CSS3', icon: SiCss3, iconColor: '#1572B6' },
  { description: 'SASS', icon: SiSass, iconColor: '#CC6699' },
  { description: 'SQL & PL/SQL', icon: SiOracle, iconColor: '#C5221F' },
  { description: 'JSON', icon: SiJson, iconColor: '#3D7BF2' },
  { description: 'XML', icon: AiOutlineFileText, iconColor: '#5b6fd2' },
];

const frameworkSkills = [
  { description: 'J2EE', icon: SiEclipseide, iconColor: '#2C2255' },
  { description: '.NET', icon: SiDotnet, iconColor: '#512BD4' },
  { description: 'Spring', icon: SiSpring, iconColor: '#6DB33F' },
  { description: 'Hibernate', icon: SiHibernate, iconColor: '#59666C' },
  { description: 'REST APIs', icon: SiPostman, iconColor: '#3C3C3C' },
  { description: 'SOAP APIs', icon: FaSoap, iconColor: '#2CA9BC' },
  { description: 'Microservices', icon: SiKubernetes, iconColor: '#326CE5' },
  { description: 'GraphQL', icon: SiGraphql, iconColor: '#E10098' },
  { description: 'HotChocolate', icon: FaMugHot, iconColor: '#8A4B2D' },
  { description: 'React.js', icon: SiReact, iconColor: '#61DAFB' },
  { description: 'Redux', icon: SiRedux, iconColor: '#764ABC' },
  { description: 'Node.js', icon: SiNodedotjs, iconColor: '#339933' },
];

const cloudSkills = [
  { description: 'AWS', icon: SiAmazonaws, iconColor: '#232F3E' },
  { description: 'Azure', icon: SiMicrosoftazure, iconColor: '#0A6ED1' },
];

const databaseSkills = [
  { description: 'MySQL', icon: SiMysql, iconColor: '#4479A1' },
  { description: 'Microsoft SQL Server', icon: SiMicrosoftsqlserver, iconColor: '#CC2927' },
  { description: 'PostgreSQL', icon: SiPostgresql, iconColor: '#336791' },
  { description: 'IBM DB2', icon: SiIbm, iconColor: '#052FAD' },
  { description: 'Oracle', icon: SiOracle, iconColor: '#F80000' },
  { description: 'MongoDB', icon: SiMongodb, iconColor: '#47A248' },
  { description: 'AWS DocumentDB', icon: SiAmazondocumentdb, iconColor: '#1D4F91' },
  { description: 'AWS DynamoDB', icon: SiAmazondynamodb, iconColor: '#1D4F91' },
];

const devopsSkills = [
  { description: 'Git', icon: SiGit, iconColor: '#F05032' },
  { description: 'GitHub', icon: SiGithub, iconColor: '#181717' },
  { description: 'GitHub Actions', icon: SiGithubactions, iconColor: '#2088FF' },
  { description: 'Terraform', icon: SiTerraform, iconColor: '#844FBA' },
  { description: 'Docker', icon: SiDocker, iconColor: '#0db7ed' },
  { description: 'Maven', icon: SiApachemaven, iconColor: '#C71A36' },
  { description: 'Azure DevOps Pipelines', icon: SiAzuredevops, iconColor: '#0078D4' },
  { description: 'Jira', icon: SiJira, iconColor: '#0052CC' },
  { description: 'Confluence', icon: SiConfluence, iconColor: '#172B4D' },
  { description: 'Lucidchart', icon: FaProjectDiagram, iconColor: '#f4670a' },
  { description: 'Agile & DevOps Delivery', icon: SiAtlassian, iconColor: '#0052CC' },
];

const About = () => {
  return (
    <div className="about-container">
      <SkillSection title="PROFESSIONAL" highlight="CERTIFICATIONS" items={certificationItems} />
      <SkillSection title="LANGUAGE" highlight="PROFICIENCY" items={languageSkills} />
      <SkillSection title="FRAMEWORKS &" highlight="LIBRARIES" items={frameworkSkills} />
      <SkillSection title="CLOUD" highlight="PLATFORMS" items={cloudSkills} />
      <SkillSection highlight="DATABASES" items={databaseSkills} />
      <SkillSection title="DEVOPS &" highlight="COLLABORATION" items={devopsSkills} />
      <ToolStack />
    </div>
  );
};

export default About;
