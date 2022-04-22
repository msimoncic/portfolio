import React from "react";
import './Skills.css';
import {SiNette, SiCss3, SiHtml5, SiJavascript, SiBootstrap, SiReact} from "react-icons/si";

function Skills() {
    return (
        <section id="skills">
            <h5>Co vše umím</h5>
            <h2>Moje znalosti</h2>

            <div className="container skills__container">
                <div className="skill__frontend">
                  <h3>Frontend</h3>
                  <div className="skills__cards">
                      <article className="skills__details">
                              <SiHtml5 className="skills__details-icon"/>
                              <h4>HTML</h4>
                              <small className="text-light">Pokročilý</small>
                      </article>
                      <article className="skills__details">
                              <SiCss3 className="skills__details-icon"/>
                              <h4>CSS</h4>
                              <small className="text-light">Pokročilý</small>
                      </article>
                      <article className="skills__details">
                              <SiNette className="skills__details-icon"/>
                              <h4>Nette</h4>
                              <small className="text-light">Mírně pokročilý</small>
                      </article>
                      <article className="skills__details">
                          <SiBootstrap className="skills__details-icon"/>
                          <h4>Bootstrap</h4>
                          <small className="text-light">Mírně pokročilý</small>
                      </article>
                      <article className="skills__details">
                              <SiJavascript className="skills__details-icon"/>
                              <h4>Javascript</h4>
                              <small className="text-light">Základy</small>
                      </article>
                      <article className="skills__details">
                              <SiReact className="skills__details-icon"/>
                              <h4>React</h4>
                              <small className="text-light">Základy</small>
                      </article>
                  </div>

                </div>
            </div>
        </section>
    )
}

export default Skills;