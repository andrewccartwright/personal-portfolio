import ProjectData from "./ProjectData";

import tetris from '../../assets/images/project-images/tetris.png';
import proration from '../../assets/images/project-images/proration.png';
import quasigroups from '../../assets/images/project-images/quasigroups.png';
import snake from '../../assets/images/project-images/snake.png';
import hjCartwright from '../../assets/images/project-images/hj-cartwright.png';
import Project from "./Project";
import '../../css/projects/Projects.css';

const projects: ProjectData[] = [
    {
        src: hjCartwright,
        link: "https://hjcartwright.com",
        name: "HJ Cartwright - Author Website",
        description: "I created a dynamic and visually engaging website for my wife to market and promote their literary works. (Side note -- her books are incredible, check them out!). The primary goal is to establish an online platform that not only showcases her books but also provides a seamless and enjoyable experience for visitors, encouraging book exploration and sales."
    },
    {
        src: tetris,
        link: "https://github.com/andrewccartwright/tetris_game",
        name: 'Tetris',
        description: 'This is a Java-based Tetris game built using JavaFX, Spring Boot, and Apache Maven. I had a lot of fun building this game and hope you enjoy it as well if you give it a try!'
    },
    {
        src: quasigroups,
        link: 'https://andrewccartwright.github.io/quasigroups',
        name: 'Isomorphisms and Permutations of Quasigroups',
        description: `In my last year of undergrad, I completed a research project looking at the properties of quasigroups of order 5. At the time, I created a small program in C++ to check for isomorphism and to perform permutations on the elements of the quasigroup. I recently created this site so that I could host this project publicly.`
    },
    {
        src: proration,
        link: 'https://andrewccartwright.github.io/proration-tool/',
        name: 'Proration Tool',
        description: 'This tool can be used to calculate prorated invoice amounts by entering dates, number of users, and price per user.'
    },
    {
        src: snake,
        link: 'https://andrewccartwright.github.io/snake-game/',
        name: 'Snake Game',
        description: 'A simple snake game created using vanilla JavaScript.'
    },
]

const Projects = (props: {}) => {
    return (
        <div id='projects'>
            <h1 id='projects-intro'>Here are some recent projects I have made:</h1>
            {
                projects.map((project, i) => {
                    return (
                        <Project project={project} key={i} />
                    )
                })
            }
        </div>
    )
}

export default Projects;