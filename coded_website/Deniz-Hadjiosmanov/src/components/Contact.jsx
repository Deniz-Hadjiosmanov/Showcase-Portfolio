import React, { useState, useCallback } from "react";
import './Contact.css';

// Importing the necessary photos
import Linkedin from '../assets/linkedin.png';
import Email from '../assets/email.png';
import Copy from '../assets/copy.png';
import Footer from '../assets/footer.svg';

function Contactsection() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    // Setting the popup that is shown after copying the LinkedIn or the Email
    const showPopup = (message) => {
        setPopupMessage(message);
        setPopupVisible(true);
        setTimeout(() => {
            setPopupVisible(false);
        }, 3000); // Show the popup for 3 seconds after copying the LinkedIn or the Email
    };

    // Function for copying my LinkedIn URL
    const copyLinkedIn = useCallback(() => {
        navigator.clipboard.writeText("https://www.linkedin.com/in/deniz-hadjiosmanov-b1516122b/")
            .then(() => {
                showPopup('LinkedIn URL copied!');
            })
            .catch(err => {
                console.error('LinkedIn not copied ', err); 
            });
    }, []);

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
            <p id="creative-clarification">Let’s make something new, different and more meaningful or make things more visual or conceptual!</p>
        </div>

        {/* Displaying the links for social media */}
        <div id="social-media-container">
            <div className="social-media-box">
                <img src={Linkedin} alt="Linkedin"/>
                <p>Deniz Hadjiosmanov</p>
                <img src={Copy} alt="Copy" className="copy-image" onClick={copyLinkedIn}/>
            </div>

            <div className="social-media-box">
                <img src={Email} alt="Email"/>
                <p>denl.gx@gmail.com</p>
                <img src={Copy} alt="Copy" className="copy-image" onClick={copyEmail}/>
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