import React from 'react';
import { Link } from "react-router-dom";
import '../css/Navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <Link to="/" className="navbar__name">Paul Prokopy's Portfolio</Link>
                <div className="navbar__buttons">
                    <Link to="/whatido" className="navbar__buttons">What I Do</Link>
                    <Link to="/about" className="navbar__buttons">About Me</Link>
                    <Link to="/portfolio" className="navbar__buttons">Portfolio</Link>
                    <Link to="/contact" className="navbar__buttons">Contact</Link>
                </div>
        </div>
      </nav>
    );
};

export default Navbar;
