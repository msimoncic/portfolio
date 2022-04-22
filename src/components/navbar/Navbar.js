import React from "react";
import './Navbar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import {GiBrain} from 'react-icons/gi';
import {MdComputer} from 'react-icons/md';
import {BiMessageDetail} from 'react-icons/bi';
import {useState} from "react";


function Navbar() {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserCircle /></a>
            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiBrain /></a>
            <a href="#work" onClick={() => setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}><MdComputer /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
        </nav>
    )
}

export default Navbar;