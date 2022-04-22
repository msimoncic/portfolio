import React from "react";
import './Footer.css';
import {BsFacebook, BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

function Footer() {
    return (
        <footer>
            <a href="#" className="footer__logo">MICHAL</a>

            <ul className="permalinks">
                <li><a href="#">Domů</a></li>
                <li><a href="#about">O mně</a></li>
                <li><a href="#skills">Dovednosti</a></li>
                <li><a href="#services">Nabízené služby</a></li>
                <li><a href="#work">Projekty</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/michal.simoncic.1/" target="_blank" rel={"noreferrer"}><BsFacebook /></a>
                <a href="https://twitter.com/MichalSimoncic" target="_blank" rel={"noreferrer"}><BsTwitter /></a>
                <a href="https://www.instagram.com/michal_simoncic15/" target="_blank" rel={"noreferrer"}><BsInstagram /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; 2022 Michal Šimončič. Všechna práva vyhrazena.</small>
            </div>
        </footer>
    )
}

export default Footer;