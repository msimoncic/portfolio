import React from "react";
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

function HeaderSocials() {
    return (
        <div>
            <div className="header__socials">
                <a href="https://www.linkedin.com/in/michal-%C5%A1imon%C4%8Di%C4%8D-35118a238/" target={"_blank"}><BsLinkedin /></a>
                <a href="https://github.com/msimoncic" target={"_blank"}><BsGithub /></a>
                <a href="https://twitter.com/MichalSimoncic" target={"_blank"}><BsTwitter /></a>
            </div>
        </div>
    )
}

export default HeaderSocials;