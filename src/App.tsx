import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app-container">
      {/* Hamburger Menu */}
      <button className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
          <li><a href="#about" onClick={toggleSidebar}>About</a></li>
          <li><a href="#services" onClick={toggleSidebar}>Services</a></li>
          <li><a href="#portfolio" onClick={toggleSidebar}>Portfolio</a></li>
          <li><a href="#blog" onClick={toggleSidebar}>Blog</a></li>
          <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to My Website</h1>
        <p>Explore the sections using the sidebar menu.</p>
      </div>
    </div>
  );
};

export default App;
