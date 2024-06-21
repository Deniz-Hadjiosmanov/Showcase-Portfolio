import React, { useState, useEffect } from "react";
import './Navigationbar.css';

function NavigationBar() {
    const [activeSection, setActiveSection] = useState('');

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

    // Function that detects the currently active section
    const detectActiveSection = () => {
        const projectsSection = document.getElementById('project-section-container');
        const aboutSection = document.getElementById('about-section-container');
        const contactSection = document.getElementById('contact-section-container');

        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        if (scrollPosition >= contactSection.offsetTop) {
            setActiveSection('Contact');
        } else if (scrollPosition >= aboutSection.offsetTop) {
            setActiveSection('About');
        } else if (scrollPosition >= projectsSection.offsetTop) {
            setActiveSection('Projects');
        } else {
            setActiveSection('');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', detectActiveSection);
        return () => {
            window.removeEventListener('scroll', detectActiveSection);
        };
    }, []);

    return (
    <>
        {/* Navigation bar */}
        <div className="navbar">
            <div onClick={scrollToProjects} className={activeSection === 'Projects' ? 'active' : ''}> PROJECTS </div>
            <div onClick={scrollToAbout} className={activeSection === 'About' ? 'active' : ''}> ABOUT </div>
            <div onClick={scrollToContact} className={activeSection === 'Contact' ? 'active' : ''} id="contact-navigation-btn"> CONTACT </div>
        </div>
    </>
    );
}

export default NavigationBar;