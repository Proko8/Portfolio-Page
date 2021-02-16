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
                <div className="navbar__left">
                    <img src="https://i.imgur.com/JSc0fT4.png" className="navbar__browns" aria-label="Cleveland Browns Logo"></img>
                    <Link to="/" className="navbar__name">Paul Prokopy's Portfolio</Link>
                </div>
                <div className="navbar__right">
                    <div className="navbar__tabs">
                        <Link to="/whatido" className="navbar__buttons"> <FaIcons.FaKeyboard className="navbar__icons" />What I Do</Link>
                    </div>
                    <div className="navbar__tabs"> 
                        <Link to="/about" className="navbar__buttons"><BsIcons.BsFillPersonLinesFill className="navbar__icons"/>About Me</Link>
                    </div>
                    <div className="navbar__tabs">
                        <Link to="/portfolio" className="navbar__buttons"><FaIcons.FaLaptopCode className="navbar__icons"/>Portfolio</Link>
                    </div>
                    <div className="navbar__tabs navbar__tabs__contact">
                        <Link to="/contact" className="navbar__buttons"><FiIcons.FiPhoneCall className="navbar__icons"/>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
