import React from "react";
import './Projects.css';

// Importing the necessary photos
import Petica from '../assets/petica.svg';
import Maike from '../assets/maike.svg';
import Bierens from '../assets/bierens.svg';
import Coding from '../assets/coding.svg';

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
                <div className="skills-used">
                    <p className="project-title">Digital Pet Suggestor</p>

                    <div className="skill">
                        <img src={Coding} alt="Coding"/>
                        <p>Double Diamond</p>
                    </div>
                    <div className="skill">
                        <img src={Coding} alt="Coding"/>
                        <p>JavaScript</p>
                        <p className="btn-see-the-project">See the project</p>
                    </div>
                    
                </div>

            </div>

            <div className="project-card">
            <img src={Bierens} alt="Petica" id="petica"/>
                <div className="skills-used">
                    <p className="project-title">Referral Program</p>

                    <div className="skill">
                        <img src={Coding} alt="Coding"/>
                        <p>Water-scrum-fall</p>
                    </div>
                    <div className="skill">
                        <img src={Coding} alt="Coding"/>
                        <p>React & Vite</p>
                        <p className="btn-see-the-project">See the project</p>
                    </div>
                    
                </div>

            </div>

            <div className="project-card">
            <img src={Maike} alt="Petica" id="petica"/>
                <div className="skills-used">
                    <p className="project-title">Promoting a Potential Singer</p>

                    <div className="skill">
                        <img src={Coding} alt="Coding"/>
                        <p>Waterfall</p>
                    </div>
                    <div className="skill">
                        <img src={Coding} alt="Coding"/>
                        <p>JavaScript</p>
                        <p className="btn-see-the-project">See the project</p>
                    </div>
                    
                </div>

            </div>
        </div>
        
    </section>
    </>
    )
}

export default Projectsection;