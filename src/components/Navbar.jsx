import React from 'react';
import { Link } from "react-router-dom";
import '../styles/_navbar.scss';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar__right">
                    <img src="https://i.imgur.com/JSc0fT4.png" className="navbar__browns" aria-label="Cleveland Browns Logo"></img>
                    <Link to="/" className="navbar__name">Paul Prokopy's Portfolio</Link>
                </div>
                <div className="navbar__right">
                    <div className="navbar__tabs">
                        <FaIcons.FaKeyboard className="navbar__icons" />
                        <Link to="/whatido" className="navbar__buttons">What I Do</Link>
                    </div>
                    <div className="navbar__tabs">
                        <BsIcons.BsFillPersonLinesFill className="navbar__icons"/>
                        <Link to="/about" className="navbar__buttons">About Me</Link>
                    </div>
                    <div className="navbar__tabs">
                        <FaIcons.FaLaptopCode className="navbar__icons"/>
                        <Link to="/portfolio" className="navbar__buttons">Portfolio</Link>
                    </div>
                    <div className="navbar__tabs navbar__tabs__contact">
                        <FiIcons.FiPhoneCall className="navbar__icons"/>
                        <Link to="/contact" className="navbar__buttons">Contact</Link>
                    </div>
                </div>
        </div>
      </nav>
    );
};

export default Navbar;
