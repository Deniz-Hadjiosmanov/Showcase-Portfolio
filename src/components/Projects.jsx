import React, { useState, useEffect, useRef } from "react";
import './Projects.css';

// Importing the necessary images
import Petica from '../assets/petica.svg';
import JohanSports from '../assets/johan-sports.svg';
import NS from '../assets/NS.jpg';
import Maike from '../assets/maike.svg';
import Bierens from '../assets/bierens.svg';
import DoubleDiamond from '../assets/double-diamond.svg';
import JavaScriptLogo from '../assets/java-script-logo.svg';
import ReactLogo from '../assets/react-logo.svg';
import MachineLearningLogo from '../assets/machine-learning.svg';
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
                <p className="sub-title" id="card-clarification">Each card below shows what working method I followed for the project and what other skill I used besides my UX/UI expertise.</p>
            </div>

            <div id="projects-container">
                <div className="project-card">
                    <img src={NS} alt="NS" className="project-image" />
                    <p className="project-title">Transparency for Bike Travellers</p>
                    <div className="card-text">
                        <div className="skills-used">
                            <div className="skill">
                                <img src={DoubleDiamond} alt="Double Diamond" className="skill-image" />
                                <p className="skill-text">Double Diamond</p>
                            </div>
                            <div className="skill">
                                <img src={MachineLearningLogo} alt="JavaScript" className="skill-image" />
                                <p className="skill-text">Machine learning</p>
                            </div>
                        </div>
                        <a href="https://app.notion.com/p/Transparency-in-Journey-Planning-of-Bike-Travellers-416cb78ccebe8052a77bc2d247e2269f?source=copy_link" target="_blank" className="btn-container-see-the-project">
                           <p className="btn-see-the-project">
                               See the project <img src={Arrow} alt="Arrow" className="btn-arrow" />
                           </p>
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <img src={JohanSports} alt="Johan Sports" className="project-image" />
                    <p className="project-title">Train or Play - Do it Your Way</p>
                    <div className="card-text">
                        <div className="skills-used">
                            <div className="skill">
                                <img src={Waterfall} alt="Waterfall-Agile hybrid" className="skill-image" />
                                <p className="skill-text" id="waterfall-agile-hybrid-text">Waterfall-Agile hybrid</p>
                            </div>
                            <div className="skill">
                                <img src={ReactLogo} alt="JavaScript" className="skill-image" />
                                <p className="skill-text">Front-end</p>
                            </div>
                        </div>
                        <a href="https://app.notion.com/p/One-App-for-Team-and-Individual-Activities-41dcb78ccebe807eb688d1d00bc31b28?source=copy_link" target="_blank" className="btn-container-see-the-project">
                           <p className="btn-see-the-project">
                               See the project <img src={Arrow} alt="Arrow" className="btn-arrow" />
                           </p>
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <img src={Bierens} alt="Bierens" className="project-image" id="bierens" />
                    <p className="project-title">Referral Program</p>
                    <div className="card-text">
                        <div className="skills-used">
                            <div className="skill">
                                <img src={Waterfall} alt="Waterfall-scrum-fall" className="skill-image" />
                                <p className="skill-text" id="waterfall-agile-hybrid-text">Waterfall-Agile hybrid</p>
                            </div>
                            <div className="skill">
                                <img src={ReactLogo} alt="React" className="skill-image" />
                                <p className="skill-text" id="react-skill-image">Front-end</p>
                            </div>
                        </div>
                        <a href="https://app.notion.com/p/Referral-System-419cb78ccebe805d95cede0ae1857edc?source=copy_link" target="_blank" className="btn-container-see-the-project">
                           <p className="btn-see-the-project">
                               See the project <img src={Arrow} alt="Arrow" className="btn-arrow" />
                           </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projectsection;
