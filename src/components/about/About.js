import React from "react";
import './About..css';
import ME from '../../img/about.jpg';
import {FaAward} from 'react-icons/fa';

function About() {
    return (
        <section id="about">
            <h5>Něco málo</h5>
            <h2>O mně</h2>

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
                            <h5>Zkušenosti</h5>
                            <small>Mám již více jak 3 roky praxe jako front-end kodér</small>
                        </article>

                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Učenlivost</h5>
                            <small>Rád se zlepšuji ve věcech, které dělám</small>
                        </article>

                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Komunikativnost</h5>
                            <small>Jsem velice komunikativní člověk s týmovým duchem</small>
                        </article>
                    </div>

                    <p>Jmenuji se Michal Šimončič a je mi 25 let.
                        Momentálně již čtvrtým rokem pracuji ve firmě <a href="https://www.labona.cz/">Labona.cz</a>,
                        kde funguji jako kodér, správce adminu a xml feedů, které dále upravuji před aplikaci Mergado.
                        Bokem jsem realizoval pár menších projektů.
                    </p>

                    <a href="#contact" className="btn btn-primary">Kontaktujte mě</a>
                </div>
            </div>
        </section>
    )
}

export default About;