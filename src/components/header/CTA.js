import React from "react";
import CV from '../../img/zivotopis_michal_simoncic.pdf';

function CTA() {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Stáhnout CV</a>
            <a href="#contact" className="btn btn-primary">Kontaktujte mě</a>
        </div>
    )
}

export default CTA;