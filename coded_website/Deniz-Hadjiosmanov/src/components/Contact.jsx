import React from "react";
import './Contact.css';

// Importing the necessary photos
import Instagram from '../assets/instagram.png';
import Linkedin from '../assets/linkedin.png';
import Email from '../assets/email.png';
import Copy from '../assets/copy.png';
import Footer from '../assets/footer.svg';

function Contactsection() {
    return (
    <>
    <section id="contact-section-container">
        <div id="contact-titles-container">
            <p id="creative">Let’s Go <c>Creative</c></p>
            <p id="creative-clarification">Let’s make something new, different and more meaningful or make things more visual or conceptual!</p>
        </div>

        {/* Displaying the links for social media */}
        <div id="social-media-container">
            <div className="social-media-box">
                <img src={Linkedin} alt="Linkedin"/>
                <p>Deniz Hadjiosmanov</p>
                <img src={Copy} alt="Copy" className="image-set"/>
            </div>

            <div className="social-media-box" id="instagram">
                <img src={Instagram} alt="Instagram"/>
                <p>deniz_hadjiosmanov</p>
                <img src={Copy} alt="Copy" className="image-set"/>
            </div>

            <div className="social-media-box">
                <img src={Email} alt="Email"/>
                <p>Deniz Hadjiosmanov</p>
                <img src={Copy} alt="Copy" className="image-set"/>
            </div>
        </div>

        <img src={Footer} alt="Footer" id="footer"/>
        
        
    </section>
    </>
    )
}

export default Contactsection;