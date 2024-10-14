import '../styles/navbar.css'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`nav-container ${isOpen ? "open" : ""}`}>
            <div>
                <p className="title">Full Stack Developer</p>
                <button onClick={handleToggle}>
                    {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>
            <p className={`nav-links ${isOpen ? "open" : ""}`}>
                <a href="#about">about</a>
                <a href="#skills">skills</a>
                <a href="#projects">projects</a>
                <a href="#contact">contact</a>
            </p>
        </nav>
    );
}

export default Navbar;