import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/about/About'
import Projects from './components/projects/Projects';
import Resume from './components/Resume';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router basename="/my-portfolio">
          <Navbar className="header"/>
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Resume" element={<Resume />} />
            </Routes>
          </main>
      </Router>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
