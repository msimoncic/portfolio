import React, { useRef } from 'react';
import './Contact.css';
import {MdOutlineEmail} from "react-icons/md";
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {SiViber} from 'react-icons/si';
import emailjs from 'emailjs-com';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nu11ixd', 'template_2wk9uzg', form.current, 'POJCk11LvbGvHFuS-')
        e.target.reset()
    };

    return (
        <section id="contact">
            <h5>Spojte se se mnou</h5>
            <h2>Kontaktujte mě</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>michal.simoncic15@gmail.com</h5>
                        <a href="mailto:michal.simoncic15@gmail.com" target="_blank" rel={"noreferrer"}>Poslat mail</a>
                    </article>
                    <article className="contact__option">
                        <BsMessenger className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Michal Šimončič</h5>
                        <a href="https://m.me/michal.simoncic.1/" target="_blank" rel={"noreferrer"}>Poslat zprávu</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+420 702 052 097</h5>
                        <a href="https://web.whatsapp.com/send?phone=+420702052097" target="_blank" rel={"noreferrer"}>Poslat zprávu</a>
                    </article>
                    <article className="contact__option">
                        <SiViber className="contact__option-icon"/>
                        <h4>Viber</h4>
                        <h5>+420 702 052 097</h5>
                        <a href="viber://chat?number=+420702052097" target="_blank" rel={"noreferrer"}>Poslat zprávu</a>
                    </article>
                </div>

                {/*END OF CONTACT OPTION*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Vaše jméno a příjmení' required />
                    <input type="email" name="email" placeholder='Váš email' required />
                    <textarea name="message" rows="7" placeholder="Vaše zpráva" required />
                    <button type="submit" className="btn btn-primary">Poslat zprávu</button>
                </form>

            </div>

        </section>
    )
}

export default Contact;