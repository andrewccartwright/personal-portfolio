import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = (props: {}) => {
    const onClick = () => {
        const body = document.getElementById('body');

        if (body != null) {
            body.style.background = '#FFFFFF';
        }
    }

    return (
        <div id='nav-bar' className="text-center">
            <div id="links-section">
                <Link id="welcome-link" className="nav-links" to="/">WELCOME</Link>
                <Link id="projects-link" className="nav-links" to="/projects" onClick={onClick}>PROJECTS</Link>
                <Link id="about-me-link" className="nav-links" to="/about-me" onClick={onClick}>ABOUT ME</Link>    
            </div>
        </div>
    )
}   

export default Navbar;