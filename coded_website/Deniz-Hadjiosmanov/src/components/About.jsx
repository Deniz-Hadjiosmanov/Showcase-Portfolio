import React from "react";
import Cup from '../assets/cup.png';
import './About.css';

function Aboutsection() {
    return (
    <>
    <section id="about-section-container">
        <div id="about-section-upper-row">
        <div id="about-section-titles">
            <p className="sub-title">My Skills</p>
            <p className="title" id="about-title">Why Hire Me As Your Next <c>Intern</c></p>
            <p className="sub-title" id="about-description">As a young professional, my goal is to be <c>versatile</c> and able to adapt quickly.</p>
        </div>
        <div className="about-skill-box">
            <img src={Cup} alt="Cup"/>
            <p className="skill-box-title">User Interaction</p>
            <p className="skill-box-text">In November 2022 I won 1st place in a Human Interaction competition in TU/e.</p>
        </div>
        </div>
        <div id="about-section-bottom-row">

            <div className="about-skill-box">
                <img src={Cup} alt="Cup"/>
                <p className="skill-box-title">UX Research</p>
                <p className="skill-box-text">In November 2022 I won 1st place in a Human Interaction competition in TU/e.</p>
            </div>
            <div className="about-skill-box">
                <img src={Cup} alt="Cup"/>
                <p className="skill-box-title">UX/UI Design</p>
                <p className="skill-box-text">In November 2022 I won 1st place in a Human Interaction competition in TU/e.</p>
            </div>
            <div className="about-skill-box">
                <img src={Cup} alt="Cup"/>
                <p className="skill-box-title">Web Development</p>
                <p className="skill-box-text">In November 2022 I won 1st place in a Human Interaction competition in TU/e.</p>
            </div>
            <div className="about-skill-box">
                <img src={Cup} alt="Cup"/>
                <p className="skill-box-title">Media Production</p>
                <p className="skill-box-text">In November 2022 I won 1st place in a Human Interaction competition in TU/e.</p>
            </div>

        </div>
        
    </section>
    </>
    )
}

export default Aboutsection;