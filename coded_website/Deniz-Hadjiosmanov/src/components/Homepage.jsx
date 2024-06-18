import React from "react";
import './Homepage.css';

// Importing the necessary photos
import DenizPhoto from '../assets/Deniz-photo.svg';
import Navigation from '../assets/Navigation.svg';

function Homesection() {
    return (
    <>
    {/* Navigation bar */}
    <div class="navbar">
        <a href="#home">PROJECTS</a>
        <a href="#news">ABOUT</a>
        <a href="#contact" id="contact-navigation-btn">CONTACT</a>
    </div>

    {/* Content of the Home section */}
    <div id="home-background">
        <img src={DenizPhoto} alt="My photo" id="Deniz-photo"/>
        <div id="Home-page-description">
            <p className="description-paragraph" id="I-am-deniz">Hey, I am Deniz</p>
            <p className="description-paragraph" id="I-am-uxui-designer">I am a <c id="UXUI-designer">UX/UI designer</c></p>
            <p className="description-paragraph" id="my-descriptioon">I’m a 22-year-old ICT & Media Design student with a passion for design and creating digital products.</p>
            <button id="see-my-work-button">See my work</button>
        </div>
    </div>
    </>
    )
}

export default Homesection;