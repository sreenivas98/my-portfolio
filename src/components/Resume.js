import resumePath from "../Assets/Resume.jpg";
import resumePdf from "../Assets/Resume.pdf";
import { FaDownload } from "react-icons/fa";
import './CSS/resume.css'

const Resume = () => {
  return (
    <div className="resume">
      <a href={resumePdf} download="Sreenivas_Resume.pdf">
        <button>
          <FaDownload /> Download Resume
        </button>       
      </a>
      <img className='resume-img' src={resumePath} alt="Sreenivas Resume"/>
      <a href={resumePdf} download="Sreenivas_Resume.pdf">
        <button>
          <FaDownload /> Download Resume
        </button>      
      </a>
    </div>
  );
}

export default Resume;

