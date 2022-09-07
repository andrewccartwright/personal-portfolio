import { Link } from 'react-router-dom';
import '../../css/about-me/AboutMe.css'
import ContactMe from './sub-components/ContactMe';
import Education from './sub-components/Education';
import Technology from './sub-components/Technology';

const AboutMe = (props: {}) => {
    return (
        <div>
            <div id="profile-pic"></div>

            <div id="about-me" className="text-center">
                <h1 id="about-me-title">About Me</h1>
                <p className="text-left about-me-summary">I am a recent graduate with
                a strong background in mathematics and a passion for problem-solving.
                I thrive on the challenge of learning new technologies quickly and strive
                to continually improve my abilities as a developer.
                In my free time, I enjoy playing the guitar, reading, and cooking.
                <br />
                <br />
                My journey with coding began about 10 years ago when I took a Web Programming class while still in high school in Colorado.
                I was immediately intrigued. I created a simple Snake Game and a few simple single-page websites.
                However, I soon after moved to Utah and the high school I attended there didn't have a strong computer science program.
                My focus moved to other things and the skills I had gained began to fade.
                <br />
                <br />
                When I began college at Southern Utah University in 2017, I decided to take an introductory computer science course that taught the basics of Java.
                My passion for programming was rekindled and I decided to pursue a Computer Science minor. I took courses in Data Structures and Algorithms, Foundations of Computation Theory, C++ Programming, and Software Engineering.
                My education at SUU allowed me to gain a strong basis in the fundamentals of computer science.
                <br />
                <br />
                Since graduating from SUU in December 2020, I have dedicated free time each week to strengthening my coding skills and learning new technologies.
                I have completed certifications through FreeCodeCamp in Responsive Web Design, JavaScript Algorithms and Data Structures, Front End Development
                Libraries, and APIs and Microservices. I have also completed the Backend Engineer Career Path through Codecademy to increase my abilities working on the back end.
                <br />
                <br />
                I am currently working as a Technical Support Analyst at Addepar, which has allowed me to work closely with developer teams, troubleshoot product issues and, when necessary, file bug tickets. I have also been able to write/modify Python scripts. I am constantly striving to learn new technologies and expand my skillset as a developer.
                Please check out my projects <Link to="/projects">here</Link> and let me know what you think!
                </p>            
            </div>

            <Education />
            <Technology />
            <ContactMe />

        </div>
    )
}

export default AboutMe;