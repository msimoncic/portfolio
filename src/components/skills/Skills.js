import React from "react";
import './Skills.css';
import {SiNette, SiCss3, SiHtml5, SiJavascript, SiBootstrap, SiReact, SiSass, SiWordpress, SiPhp, SiAdobexd, SiAdobephotoshop} from "react-icons/si";

function Skills() {
    return (
        <section id="skills">
            <h5>What can i do</h5>
            <h2>My skills</h2>

            <div className="container skills__container">
                <div className="skill__frontend">
                  <h3>Frontend</h3>
                  <div className="skills__cards">
                      <article className="skills__details">
                              <SiHtml5 className="skills__details-icon"/>
                              <h4>HTML</h4>
                              <small className="text-light">Advanced</small>
                      </article>
                      <article className="skills__details">
                              <SiCss3 className="skills__details-icon"/>
                              <h4>CSS</h4>
                              <small className="text-light">Advanced</small>
                      </article>
                      <article className="skills__details">
                              <SiSass className="skills__details-icon"/>
                              <h4>SCSS</h4>
                              <small className="text-light">Intermediate</small>
                      </article>
                      <article className="skills__details">
                              <SiJavascript className="skills__details-icon"/>
                              <h4>Javascript</h4>
                              <small className="text-light">Intermediate</small>
                      </article>
                      <article className="skills__details">
                              <SiNette className="skills__details-icon"/>
                              <h4>Nette</h4>
                              <small className="text-light">Intermediate</small>
                      </article>
                      <article className="skills__details">
                          <SiBootstrap className="skills__details-icon"/>
                          <h4>Bootstrap</h4>
                          <small className="text-light">Intermediate</small>
                      </article>
                      <article className="skills__details">
                              <SiWordpress className="skills__details-icon"/>
                              <h4>Wordpress</h4>
                              <small className="text-light">Basics</small>
                      </article>
                      <article className="skills__details">
                              <SiReact className="skills__details-icon"/>
                              <h4>React</h4>
                              <small className="text-light">Basics</small>
                      </article>
                      <article className="skills__details">
                              <SiPhp className="skills__details-icon"/>
                              <h4>PHP</h4>
                              <small className="text-light">Basics</small>
                      </article>
                      <article className="skills__details">
                              <SiAdobexd className="skills__details-icon"/>
                              <h4>Adobe XD</h4>
                              <small className="text-light">Basics</small>
                      </article>
                      <article className="skills__details">
                              <SiAdobephotoshop className="skills__details-icon"/>
                              <h4>Adobe Photoshop</h4>
                              <small className="text-light">Basics</small>
                      </article>
                  </div>

                </div>
            </div>
        </section>
    )
}

export default Skills;