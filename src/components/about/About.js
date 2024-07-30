import '../CSS/about.css';
import TechStack from './TechStack';
import ToolStack from './ToolStack';

const Home = () => {
  return (
    <div className="about-container">
        <p className="msg-text">
            Page under construction. Feel free to check out My skill set and tools I use below and Home, Projects and Resume pages using the Navbar.
        </p>  
        <TechStack/>
        <ToolStack/>        
    </div>
  );
};

export default Home;
