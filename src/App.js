import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/projects/Projects';
import Resume from './components/Resume';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar className="header"/>
          <main className="content">
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> */}
              <Route path="/my-portfolio/Projects" element={<Projects />} />
              <Route path="/my-portfolio/Resume" element={<Resume />} />
            </Routes>
          </main>
      </Router>
      <Footer className="footer"/>
    </div>
  );
}

export default App;