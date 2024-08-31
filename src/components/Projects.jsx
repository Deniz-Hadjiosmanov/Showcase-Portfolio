import React, { useState, useEffect, useRef } from "react";
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
import Dribbble from '../assets/dribbble.png';
import GitHub from '../assets/github.png';

function Projectsection() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const projectSectionRef = useRef(null);

    const handleMouseEnter = (projectId) => {
        setHoveredProject(projectId);
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    // Smooth animation for the Projects section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    observer.disconnect(); // Execute the animation only once - the first time when the user scrolls to/opens the Projects section
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (projectSectionRef.current) {
            observer.observe(projectSectionRef.current);
        }

        return () => {
            if (projectSectionRef.current) {
                observer.unobserve(projectSectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <section id="project-section-container" ref={projectSectionRef} className={hasAnimated ? 'visible' : ''}>
            <div id="project-section-titles">
                <p className="sub-title" id="sub-title-projects">My Picks</p>
                <p className="title" id="title-projects">Projects</p>
            </div>

            <div id="projects-container">
                <div className="project-card">
                    <img src={Bierens} alt="Bierens" id="bierens" />
                    <p className="project-title">Referral Program</p>
                    <div className="card-text">
                        <div className="skills-used">
                            <div className="skill">
                                <img src={Waterfall} alt="Waterfall-scrum-fall" className="skill-image" />
                                <p className="skill-text">Water-scrum-fall</p>
                            </div>
                            <div className="skill">
                                <img src={ReactLogo} alt="React" className="skill-image" />
                                <p className="skill-text" id="react-skill-image">React</p>
                            </div>
                        </div>
                        <div className="btn-container-see-the-project" onMouseEnter={() => handleMouseEnter('bierens')} onMouseLeave={handleMouseLeave}>
                            <p className="btn-see-the-project">
                                See the project <img src={Arrow} alt="Arrow" className="btn-arrow" />
                            </p>
                            {hoveredProject === 'bierens' && (
                                <div className="dropdown-menu" onMouseEnter={() => handleMouseEnter('bierens')} onMouseLeave={handleMouseLeave}>
                                    <a href="https://dribbble.com/shots/24717729-Referral-System" target="_blank" className="dropdown-item"><img src={Dribbble} alt="Dribbble" id="dribbble-icon"/> Dribbble</a>
                                    <a href="https://github.com/aleksandarafk/BierensReferralProgram" target="_blank" className="dropdown-item"><img src={GitHub} alt="GitHub" id="github-icon"/> GitHub</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <img src={Petica} alt="Petica" id="petica" />
                    <p className="project-title">Digital Pet Suggestor</p>
                    <div className="card-text">
                        <div className="skills-used">
                            <div className="skill">
                                <img src={DoubleDiamond} alt="Double Diamond" className="skill-image" />
                                <p className="skill-text">Double Diamond</p>
                            </div>
                            <div className="skill">
                                <img src={JavaScriptLogo} alt="JavaScript" className="skill-image" />
                                <p className="skill-text">JavaScript</p>
                            </div>
                        </div>
                        <div className="btn-container-see-the-project" onMouseEnter={() => handleMouseEnter('petica')} onMouseLeave={handleMouseLeave}>
                            <p className="btn-see-the-project">
                                See the project <img src={Arrow} alt="Arrow" className="btn-arrow" />
                            </p>
                            {hoveredProject === 'petica' && (
                                <div className="dropdown-menu" onMouseEnter={() => handleMouseEnter('petica')} onMouseLeave={handleMouseLeave}>
                                    <a href="https://dribbble.com/shots/24730614-Digital-Pet-Suggestor" target="_blank" className="dropdown-item"><img src={Dribbble} alt="Dribbble" id="dribbble-icon"/> Dribbble</a>
                                    <a href="https://github.com/Deniz-Hadjiosmanov/Petica" target="_blank" className="dropdown-item"><img src={GitHub} alt="GitHub" id="github-icon"/> GitHub</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <img src={Maike} alt="Maike" id="maike" />
                    <p className="project-title">Promoting a Potential Singer</p>
                    <div className="card-text">
                        <div className="skills-used">
                            <div className="skill">
                                <img src={Waterfall} alt="Waterfall" className="skill-image" />
                                <p className="skill-text">Waterfall</p>
                            </div>
                            <div className="skill">
                                <img src={JavaScriptLogo} alt="JavaScript" className="skill-image" />
                                <p className="skill-text">JavaScript</p>
                            </div>
                        </div>
                        <div className="btn-container-see-the-project" onMouseEnter={() => handleMouseEnter('maike')} onMouseLeave={handleMouseLeave}>
                            <p className="btn-see-the-project">
                                See the project <img src={Arrow} alt="Arrow" className="btn-arrow" />
                            </p>
                            {hoveredProject === 'maike' && (
                                <div className="dropdown-menu" onMouseEnter={() => handleMouseEnter('maike')} onMouseLeave={handleMouseLeave}>
                                    <a href="https://dribbble.com/shots/24737404-Promoting-a-Potential-Singer" target="_blank" className="dropdown-item"><img src={Dribbble} alt="Dribbble" id="dribbble-icon"/> Dribbble</a>
                                    <a href="https://github.com/Deniz-Hadjiosmanov/Maaike-Girardin-s-Website" target="_blank" className="dropdown-item"><img src={GitHub} alt="GitHub" id="github-icon"/> GitHub</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projectsection;
