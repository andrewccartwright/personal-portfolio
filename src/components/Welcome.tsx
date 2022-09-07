import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';
import '../css/Welcome.css';
import { useEffect } from 'react';

const Welcome = (props: {}) => {
    const body = document.getElementById('body');

    useEffect(() => {
        if (body != null) {
            body.style.background = 'linear-gradient(180deg, #000000 5%, rgb(60,60,60))';
        }
    }, [])

    const animationEnd = () => {
        setTimeout(() => {
            $('.typing-effect').css({borderRight: "none"});
          }, 500);
    }

    const onButtonClick = () => {

        if (body != null) {
            body.style.background = '#FFFFFF';
        }
    }

    return (
        <div id="welcome-section">
            <div className="typing">
                <h1 id="welcome-title" className="typing-effect" onAnimationEnd={animationEnd}>Hello there.</h1>
            </div>
            <div id="below-title">
                <p id="welcome-intro">I'm Andrew.</p>
                <p id="welcome-summary">I am a detail-oriented software developer with a passion for creating intuitive and responsive applications.</p>
                <Link id="projects-link" to="/projects" onClick={onButtonClick}><button id="button-link" className="btn">View my work <FontAwesomeIcon icon={faArrowRight} /></button></Link>
            </div>
        </div>
    )
}

export default Welcome;