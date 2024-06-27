import React from "react";
import './Projects.css';

// Importing the necessary images
import Petica from '../assets/petica.svg';
import Maike from '../assets/maike.svg';
import Bierens from '../assets/bierens.svg';
import DoubleDiamond from '../assets/double-diamond.svg';
import JavaScriptLogo from '../assets/java-script-logo.svg';
import ReactLogo from '../assets/react-logo.svg';
import Waterfall from '../assets/waterfall.svg';
import Arrow from '../assets/arrow-see-project.svg';


function Projectsection() {
    return (
    <>

    <section id="project-section-container">
        <div id="project-section-titles">
            <p className="sub-title">My Picks</p>
            <p className="title">Projects</p>
        </div>

        {/* Displaying the projects */}
        <div id="projects-container">
        <div className="project-card">
            <img src={Petica} alt="Petica" id="petica"/>
            <p className="project-title">Digital Pet Suggestor</p>
            <div className="card-text">
                <div className="skills-used">
                    <div className="skill">
                        <img src={DoubleDiamond} alt="Double Diamond" className="skill-image"/>
                        <p className="skill-text">Double Diamond</p>
                    </div>
                    <div className="skill">
                        <img src={JavaScriptLogo} alt="JavaScript" className="skill-image"/>
                        <p className="skill-text">JavaScript</p>
                    </div>
                </div>
                <div className="btn-container-see-the-project" href="https://github.com/Deniz-Hadjiosmanov/Petica">
                    <a href="https://github.com/Deniz-Hadjiosmanov/Petica" target="blank" className="btn-see-the-project">See the project <img src={Arrow} alt="Arrow" className="btn-arrow"/></a>
                </div>
                
            </div>
            </div>

            <div className="project-card">
            <img src={Bierens} alt="Bierens" id="petica"/>
            <p className="project-title">Referral Program</p>
            <div className="card-text">
                <div className="skills-used">
                    <div className="skill">
                        <img src={Waterfall} alt="Waterfall-scrum-fall" className="skill-image"/>
                        <p className="skill-text">Water-scrum-fall</p>
                    </div>
                    <div className="skill">
                        <img src={ReactLogo} alt="React" className="skill-image"/>
                        <p className="skill-text">React + Vite</p>
                    </div>
                </div>
                <div className="btn-container-see-the-project">
                <a href="https://github.com/aleksandarafk/BierensReferralProgram" target="blank" className="btn-see-the-project">See the project <img src={Arrow} alt="Arrow" className="btn-arrow"/></a>
                </div>
                
            </div>
            </div>

            <div className="project-card">
            <img src={Maike} alt="Singer" id="petica"/>
            <p className="project-title">Promoting a Potential Singer</p>
            <div className="card-text">
                <div className="skills-used">
                    <div className="skill">
                        <img src={Waterfall} alt="Waterfall" className="skill-image"/>
                        <p className="skill-text">Waterfall</p>
                    </div>
                    <div className="skill">
                        <img src={JavaScriptLogo} alt="JavaScript" className="skill-image"/>
                        <p className="skill-text">JavaScript</p>
                    </div>
                </div>
                <div className="btn-container-see-the-project">
                <a href="https://github.com/Deniz-Hadjiosmanov/Maaike-Girardin-s-Website" target="blank" className="btn-see-the-project">See the project <img src={Arrow} alt="Arrow" className="btn-arrow"/></a>  
                </div>
                
            </div>
            </div>
        </div>
        
    </section>
    </>
    )
}

export default Projectsection;