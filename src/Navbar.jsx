import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counterFetch">Counter Fetch</Link></li>
        <li><Link to="/formValidation">Form Validation</Link></li>
        <li><Link to="/removeElement">Remove Element</Link></li>
        <li><Link to="/notification">Notification</Link></li>
        <li><Link to="/typewriter">Typewriter</Link></li>
        <li><Link to="/card">Card</Link></li>
        <li><Link to="/button">Button</Link></li>
        <li><Link to="/feild">Feild</Link></li>
        <li><Link to="/effect">Effect</Link></li>
        <li><Link to="/timer">Timer</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
