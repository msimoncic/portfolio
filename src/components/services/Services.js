import React from "react";
import './Services.css';

function Services() {
    return (
        <section id="services">
            <h5>Co nabízím</h5>
            <h2>Moje služby</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Frontend</h3>
                    </div>
                    <div className="service__text">
                        <p>Dokážu vám vytvořit osobní portfolio na míru.

                            K portfoliu využívám React.</p>
                    </div>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Frontend</h3>
                    </div>
                    <div className="service__text">
                        <p>Dokážu vám vytvořit osobní portfolio na míru.

                            K portfoliu využívám React.</p>
                    </div>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Frontend</h3>
                    </div>
                    <div className="service__text">
                        <p>Dokážu vám vytvořit osobní portfolio na míru.

                            K portfoliu využívám React.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Services;