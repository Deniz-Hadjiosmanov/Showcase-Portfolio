import React, { useState, useEffect } from "react";
import PortfolioLogo from '../assets/portfolio-website-logo.svg';
import './Navigationbar.css';

function NavigationBar() {
    const [activeSection, setActiveSection] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);  // State to manage menu visibility

    // Function to toggle the hamburger menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function for scrolling to Home section
    const scrollToHome = () => {
        const section = document.getElementById('home-background'); 
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);  // Close menu after clicking
    };

    // Function for scrolling to Project section
    const scrollToProjects = () => {
        const section = document.getElementById('project-section-container'); 
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);  // Close menu after clicking
    };

    // Function for scrolling to About section
    const scrollToAbout = () => {
        const section = document.getElementById('about-section-container'); 
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);  // Close menu after clicking
    };

    // Function for scrolling to Contact section
    const scrollToContact = () => {
        const section = document.getElementById('contact-section-container'); 
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);  // Close menu after clicking
    };

    // Function that detects the currently active section
    const detectActiveSection = () => {
        const projectsSection = document.getElementById('project-section-container');
        const aboutSection = document.getElementById('about-section-container');
        const contactSection = document.getElementById('contact-section-container');

        const currentScrollPosition = window.scrollY + window.innerHeight / 2; // Detecting the current scroll position of the user
        
        if (currentScrollPosition >= contactSection.offsetTop) {
            setActiveSection('Contact');
        } else if (currentScrollPosition >= aboutSection.offsetTop) {
            setActiveSection('About');
        } else if (currentScrollPosition >= projectsSection.offsetTop) {
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
            <div onClick={scrollToHome} className={activeSection === 'Projects' ? 'active' : ''} id="container-my-logo"> 
                <img src={PortfolioLogo} alt="Logo" id="my-logo"/> 
            </div>
            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div id="container-nav-btns" className={menuOpen ? 'active' : ''}>
                <div onClick={scrollToProjects} className={activeSection === 'Projects' ? 'active' : ''}> PROJECTS </div>
                <div onClick={scrollToAbout} className={activeSection === 'About' ? 'active' : ''}> ABOUT </div>
                <div onClick={scrollToContact} className={activeSection === 'Contact' ? 'active' : ''} id="contact-navigation-btn"> CONTACT </div>
            </div>
        </div>
    </>
    );
}

export default NavigationBar;
