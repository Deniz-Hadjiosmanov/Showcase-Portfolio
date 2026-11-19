import React, { useState, useEffect, useRef } from "react";
import './About.css';

// Importing the necessary photos
import Cup from "../assets/cup.svg";
import UxResearch from "../assets/ux-research.svg";
import UxUiDesign from "../assets/ux-ui-design.svg";
import WebDevelopment from "../assets/web-development.svg";
import MediaProduction from "../assets/media-production.png";
import DataScience from "../assets/data-science.svg";

function Aboutsection() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const aboutSectionRef = useRef(null);

    // Smooth animation for the About section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    observer.disconnect(); // Execute the animation only once - the first time when the user scrolls to/opens the About section
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (aboutSectionRef.current) {
            observer.observe(aboutSectionRef.current);
        }

        return () => {
            if (aboutSectionRef.current) {
                observer.unobserve(aboutSectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
    <>
    <section id="about-section-container" ref={aboutSectionRef} className={hasAnimated ? 'visible' : ''}>
        <div id="about-section-upper-row">
        <div id="about-section-titles">
            <p className="sub-title">My Skills</p>
            <p className="title" id="about-title">What is my <c>added value</c>?</p>
            <p className="sub-title" id="about-description">As a UX/UI designer, I provide a <c>multi-domain</c> expertise being the bridge between multiple departments.</p>
        </div>
        <div className="about-achievement-box">
            <img src={Cup} alt="Cup"/>
            <p className="achievement-box-title">User Interaction</p>
            <p className="achievement-box-text">In November 2022 I won <b>1st place</b> in a Human Interaction competition in TU/e.</p>
        </div>
        </div>

        {/* Displaying my skills */}
        <div id="about-section-bottom-row">

            <div className="about-skill-box">
                <img src={UxResearch} alt="UX Research"/>
                <p className="skill-box-title">UX Research</p>
                <p className="skill-box-text"><b>Analysing</b> the problem to create the right product strategy.</p>
            </div>
            <div className="about-skill-box">
                <img src={UxUiDesign} alt="UX UI Design"/>
                <p className="skill-box-title">UX/UI Design</p>
                <p className="skill-box-text">Creating a solution by <b>answering</b> the user needs and setting <b>metrics</b> to map the whole user experience.</p>
            </div>
            <div className="about-skill-box">
                <img src={WebDevelopment} alt="Front-end Development"/>
                <p className="skill-box-title">Front-end Development</p>
                <p className="skill-box-text"><b>Implementing</b> my designs and being a conversational partner with development teams.</p>
            </div>
            <div className="about-skill-box">
                <img src={DataScience} alt="Data Science"/>
                <p className="skill-box-title">Data Science</p>
                <p className="skill-box-text">Using Python to conduct <b>data analysis</b> to inform my design decisions and developing <b>machine learning</b> features.</p>
            </div>

        </div>
        
    </section>
    </>
    )
}

export default Aboutsection;