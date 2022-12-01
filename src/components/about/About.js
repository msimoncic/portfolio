import React from "react";
import './About..css';
import ME from '../../img/about.jpg';
import {FaAward} from 'react-icons/fa';

function About() {
    return (
        <section id="about">
            <h5>A few words</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>I have 3+ years experience as a frontend-developer</small>
                        </article>

                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Learnability</h5>
                            <small>I'm open to learn new things and want to improve my current skills</small>
                        </article>

                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Communication</h5>
                            <small>I'm really communicative and team player</small>
                        </article>
                    </div>

                    <p>
                        My name is Michal Šimončič, I'm 25 years old.
                        and I have been working in the company <a href="https://www.labona.cz/">Labona.cz</a> for four years 
                        as a frontend-developer, web-administrator, and administrator of xml feeds. Occasionally I'm working in 
                        <a href="https://krejta.cz/"> Krejta.cz</a> as web developer. I created a few smaller projects on the side like  
                        <a href="https://www.pneuservisbabice.cz/"> Pneuservisbabice.cz</a> or e-shop <a href="https://www.tozame.cz/">Tozame.cz</a> via <a href="https://www.shoptet.cz/">Shoptet</a>.
                    </p>

                    <a href="#contact" className="btn btn-primary">Contact me</a>
                </div>
            </div>
        </section>
    )
}

export default About;