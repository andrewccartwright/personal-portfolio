// import budgetApp from '../../images/project-images/budget-app.png';
import proration from '../../images/project-images/proration.png';
import calculator from '../../images/project-images/Calculator.png';
// import quote from '../../images/project-images/quote.png';
import snake from '../../images/project-images/snake.png';
// import spotify from '../../images/project-images/spotify.png';
import quasigroups from '../../images/project-images/quasigroups.png';
import statsCalculator from '../../images/project-images/Stats-Calculator.png';
import weatherApp from '../../images/project-images/weather-app.png';
import googleClone from '../../images/project-images/google-clone.png';
import tetris from '../../images/project-images/tetris.png';
import Project from './Project';
import '../../css/projects/Projects.css';

const projects: {src: string, link: string, name: string, description: string}[] = [
    // {
    //     src: statsCalculator,
    //     link: 'http://statisticscalculator-env.eba-bk69bqmi.us-west-2.elasticbeanstalk.com/#/',
    //     name: 'Statistics Calculator',
    //     description: 'A statistics calculator created using Spring Boot, React, and TypeScript. It can be used to calculate summary statistics and probability distributions. Hosted on AWS using Elastic Beanstalk.'
    // },
    {
        src: tetris,
        link: "https://github.com/andrewccartwright/tetris_game",
        name: 'Tetris',
        description: 'This is a Java-based Tetris game built using JavaFX, Spring Boot, and Apache Maven. I had a lot of fun building this game and hope you enjoy it as well if you give it a try!'
    },
    {
        src: proration,
        link: 'https://andrewccartwright.github.io/proration-tool/',
        name: 'Proration Tool',
        description: 'This tool can be used to calculate prorated invoice amounts by entering dates, number of users, and price per user.'
    },
    {
        src: quasigroups,
        link: 'https://andrewccartwright.github.io/quasigroups',
        name: 'Isomorphisms and Permutations of Quasigroups',
        description: `In my last year of undergrad, I completed a research project looking at the properties of quasigroups of order 5. At the time, I created a small program in C++ to check for isomorphism and to perform permutations on the elements of the quasigroup. I recently created this site so that I could host this project publicly.`
    },
    {
        src: googleClone,
        link: 'https://github.com/andrewccartwright/google-clone',
        name: 'Google Clone',
        description: 'As a front-end project, I created a clone of the Google homepage. I have built out the general search functionality using the Google Search API, but am currently working on integrating specialized search functionality (image-specific search, etc). Created using React and TypeScript.'
    },
    // {
    //     src: spotify,
    //     link: 'https://github.com/andrewccartwright/react-web-player-for-spotify',
    //     name: 'Web Player for Spotify',
    //     description: 'A clone of the Spotify web player built using React on the frontend and Node.js, Express, and Passport on the backend for authentication.'
    // },
    {
        src: snake,
        link: 'https://andrewccartwright.github.io/snake-game/',
        name: 'Snake Game',
        description: 'A simple snake game created using vanilla JavaScript.'
    },
    // {
    //     src: budgetApp,
    //     link: 'https://andrewccartwright.github.io/personal-budget/',
    //     name: 'Personal Budget App',
    //     description: 'A budgeting app created using the PERN stack. Users can add, edit, and delete expenses and income line items. Data is stored in a Postgres database.'
    // },
    {
        src: calculator,
        link: 'https://andrewccartwright.github.io/JavaScript-Calculator/',
        name: 'JavaScript Calculator',
        description: 'A simple calculator created using React-Redux.'
    },
    // {
    //     src: quote,
    //     link: 'https://andrewccartwright.github.io/quote-generator-frontend/',
    //     name: 'Quote Generator',
    //     description: 'A quote generator app built using the PERN stack. The backend is hosted on Heroku and references a Heroku Postgres database where the quotes are stored.'
    // },
    {
        src: weatherApp,
        link: 'https://andrewccartwright.github.io/weather/',
        name: 'Weather App',
        description: 'This app pulls data from the OpenWeatherMap API to tell the current weather at the location entered by the user. Built using React.'
    }
]

const Projects = (props: {}) => {
    return (
        <div id='projects'>
            <h1 id='projects-intro'>Here are some recent projects I've made:</h1>

            {
                projects.map((project, i) => {
                    return (
                        <Project obj={project} key={i} />
                    )
                })
            }
        </div>
    )
}

export default Projects;