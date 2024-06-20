import React from "react";
import './Navigationbar.css';

function NavigationBar() {

      // Function for scrolling to Project section
      const scrollToProjects = () => {
        const section = document.getElementById('project-section-container'); 
        section.scrollIntoView({ behavior: 'smooth' }); 
      };

      // Function for scrolling to About section
      const scrollToAbout = () => {
        const section = document.getElementById('about-section-container'); 
        section.scrollIntoView({ behavior: 'smooth' }); 
      };

      // Function for scrolling to Contact section
      const scrollToContact = () => {
        const section = document.getElementById('contact-section-container'); 
        section.scrollIntoView({ behavior: 'smooth' }); 
      };

    return (
    <>
    {/* Navigation bar */}
    <div class="navbar">
        <div onClick={scrollToProjects}>PROJECTS</div>
        <div onClick={scrollToAbout}>ABOUT</div>
        <div id="contact-navigation-btn" onClick={scrollToContact}>CONTACT</div>
    </div>
    </>
    )
}

export default NavigationBar;