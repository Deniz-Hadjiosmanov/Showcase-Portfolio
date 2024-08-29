import React, { useState, useCallback } from "react";
import './Contact.css';

// Importing the necessary photos
import Linkedin from '../assets/linkedin.png';
import Dribbble from '../assets/dribbble.png';
import GitHub from '../assets/github.png';
import Email from '../assets/email.svg';
import Copy from '../assets/copy.svg';
import Footer from '../assets/footer.svg';

function Contactsection() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    // Setting the popup that is shown after copying the Email
    const showPopup = (message) => {
        setPopupMessage(message);
        setPopupVisible(true);
        setTimeout(() => {
            setPopupVisible(false);
        }, 3000); // Show the popup for 3 seconds after copying the Email
    };

    // Function for copying my Email
    const copyEmail = useCallback(() => {
        navigator.clipboard.writeText("denl.gx@gmail.com")
            .then(() => {
                showPopup('Email address copied!');
            })
            .catch(err => {
                console.error('Email not copied ', err);
            });
    }, []);

    return (
    <>
    <section id="contact-section-container">
        <div id="contact-titles-container">
            <p id="creative">Let’s Go <c>Creative</c></p>
            <p id="creative-clarification">Let’s work together and transform our ideas into meaningful solutions!</p>
        </div>

        {/* Displaying the links for social media */}
        <div id="social-media-container">
        <div className="social-media-box">
                <img src={Email} alt="Email"/>
                <p>denl.gx@gmail.com</p>
                <img src={Copy} alt="Copy" className="copy-image" onClick={copyEmail}/>
        </div>
        <div className="social-media-icons-wrapper">
        <a href="https://www.linkedin.com/in/deniz-hadjiosmanov-b1516122b/" target="_blank"><img src={Linkedin} alt="LinkedIn" id="linkedin-contact"/></a>
        <a href="https://dribbble.com/deniz16" target="_blank"><img src={Dribbble} alt="Dribbble" id="dribbble-contact"/></a>
        <a href="https://github.com/Deniz-Hadjiosmanov" target="_blank"><img src={GitHub} alt="GitHub" id="github-contact"/></a>
        </div>
        </div>

        <img src={Footer} alt="Footer" id="footer"/>

        {popupVisible && (
            <div className="popup">
                {popupMessage}
            </div>
        )}
    </section>
    </>
    )
}

export default Contactsection;