import React from "react";
import './Header.css';
import CTA from './CTA';
import ME from '../../img/foto.png';
import logo from '../../img/logom.png';
import MYSELF from '../../img/coffee.png';
import HeaderSocials from "./HeaderSocials";
import {init} from "ityped";
import {useEffect} from "react";
import {useRef} from "react";

function Header() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor: false,
            backDelay:1500,
            backSpeed:60,
            strings:["Front-end kóder","Fotbalista","Student"]
        })
    }, [])

    return (
        <header>
            <div className="container header__container">
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                <h1>Michal Šimončič</h1>
                <h5 className="text-light" ref={textRef}></h5>
                <CTA />

                <HeaderSocials />
                <div className="myself">
                    <img src={MYSELF} alt="myself"/>
                </div>

                <a href="#contact" className="scroll__down">Scroll down</a>
            </div>
        </header>
    )
}

export default Header;