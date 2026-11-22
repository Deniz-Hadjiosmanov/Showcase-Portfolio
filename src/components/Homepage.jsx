import React, { useEffect, useRef, useState } from "react";
import './Homepage.css';
import DenizPhoto from '../assets/deniz.svg';

function Homesection() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const homeBackgroundRef = useRef(null);

    // Smooth animation for the Home section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    observer.disconnect(); // Execute the animation only once - the first time when the user scrolls to/opens the Home section
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (homeBackgroundRef.current) {
            observer.observe(homeBackgroundRef.current);
        }

        return () => {
            if (homeBackgroundRef.current) {
                observer.unobserve(homeBackgroundRef.current);
            }
        };
    }, [hasAnimated]);

    // Function for scrolling to Project section
    const scrollToProjects = () => {
        const section = document.getElementById('project-section-container');
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div id="home-background" ref={homeBackgroundRef} className={hasAnimated ? 'visible' : ''}>
            <img src={DenizPhoto} alt="My photo" id="Deniz-photo" />
            <div id="Home-page-description">
                <p className="description-paragraph" id="I-am-deniz">Hey, my name is Deniz</p>
                <p className="description-paragraph" id="I-am-uxui-designer">I am a <c id="UXUI-designer">UX/UI designer</c></p>
                <p className="description-paragraph" id="my-descriptioon">A 24-year-old young professional who also has understanding of Front-end development, Data analysis & Machine learning. Besides designing, I participate in the whole product development & management process.</p>
                <div id="see-my-work-button" onClick={scrollToProjects}>See my work</div>
            </div>
        </div>
    );
}

export default Homesection;