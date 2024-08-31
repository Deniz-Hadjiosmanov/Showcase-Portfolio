import React, { useState, useEffect, useRef } from "react";
import './About.css';

// Importing the necessary photos
import Cup from "../assets/cup.png";
import UxResearch from "../assets/ux-research.png";
import UxUiDesign from "../assets/ux-ui-design.png";
import WebDevelopment from "../assets/web-development.png";
import MediaProduction from "../assets/media-production.png";

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
            <p className="title" id="about-title">What's in it for <c>you</c>?</p>
            <p className="sub-title" id="about-description">As a young professional, my goal is to be <c>versatile</c> and able to adapt quickly.</p>
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
                <img src={UxResearch} alt="Cup"/>
                <p className="skill-box-title">UX Research</p>
                <p className="skill-box-text"><b>Defining</b> the target audience and <b>analysing</b> the problem to produce a viable solution.</p>
            </div>
            <div className="about-skill-box">
                <img src={UxUiDesign} alt="Cup"/>
                <p className="skill-box-title">UX/UI Design</p>
                <p className="skill-box-text">Complete <b>mapping</b> of the user experience with recommendations for the future.</p>
            </div>
            <div className="about-skill-box">
                <img src={WebDevelopment} alt="Cup"/>
                <p className="skill-box-title">Web Development</p>
                <p className="skill-box-text">Component-based development and working with various React libraries.</p>
            </div>
            <div className="about-skill-box">
                <img src={MediaProduction} alt="Cup"/>
                <p className="skill-box-title">Media Production</p>
                <p className="skill-box-text"><b>2 years of experience</b> in the Media Production industry as a videographer and a photographer.</p>
            </div>

        </div>
        
    </section>
    </>
    )
}

export default Aboutsection;