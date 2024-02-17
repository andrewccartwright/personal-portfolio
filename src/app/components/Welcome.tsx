'use client'

import Link from "next/link";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import '../css/Welcome.css';

const Welcome = (props: {}) => {
    // const body = document.getElementById('body');

    // useEffect(() => {
    //     if (body != null) {
    //         body.style.background = 'linear-gradient(180deg, #000000 5%, rgb(60,60,60))';
    //     }
    // }, [body])

    const animationEnd = (event: React.AnimationEvent) => {
        console.log(event);
        const target = event.currentTarget as HTMLElement;
        target.style.borderRight = "none";
        setTimeout(() => {
            target.style.borderRight = "none";
          }, 500);
    }

    return (
        <div id="welcome-container">
            <div id="welcome-section">
                <div className="typing">
                    <h1 id="welcome-title" className="typing-effect" onAnimationEnd={animationEnd}>Hello there.</h1>
                </div>
                <div id="below-title">
                    <p id="welcome-intro">I&#39;m Andrew.</p>
                    <p id="welcome-summary">I am a detail-oriented software developer with a passion for creating intuitive and responsive applications.</p>
                    <Link id="projects-link" href="/projects"><button id="button-link" className="btn">View my work <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </div>
            </div>
        </div>
        
    )
}

export default Welcome;