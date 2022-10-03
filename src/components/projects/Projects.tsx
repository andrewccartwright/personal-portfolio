import budgetApp from '../../images/project-images/budget-app.png';
import calculator from '../../images/project-images/Calculator.png';
import quote from '../../images/project-images/quote.png';
import snake from '../../images/project-images/snake.png';
import spotify from '../../images/project-images/spotify.png';
import quasigroups from '../../images/project-images/quasigroups.png';
import statsCalculator from '../../images/project-images/Stats-Calculator.png';
import weatherApp from '../../images/project-images/weather-app.png';
import googleClone from '../../images/project-images/google-clone.png';
import Project from './Project';
import '../../css/projects/Projects.css';

const projects: {src: string, link: string, name: string, description: string}[] = [
    {
        src: quasigroups,
        link: 'https://andrewchatch.github.io/quasigroups',
        name: 'Isomorphisms and Permutations of Quasigroups',
        description: `In my last year of undergrad, I completed a research project looking at the properties of quasigroups of order 5. At the time, I created a small program in C++ to check for isomorphism and to perform permutations on the elements of the quasigroup. I recently created this site so that I could host this project publicly.`
    },
    {
        src: googleClone,
        link: 'https://github.com/andrewchatch/google-clone',
        name: 'Google Clone',
        description: 'As a front-end project, I created a clone of the Google homepage. I have built out the general search functionality using the Google Search API, but am currently working on integrating specialized search functionality (image-specific search, etc). Created using React and TypeScript.'
    },
    // {
    //     src: spotify,
    //     link: 'https://github.com/andrewchatch/react-web-player-for-spotify',
    //     name: 'Web Player for Spotify',
    //     description: 'A clone of the Spotify web player built using React on the frontend and Node.js, Express, and Passport on the backend for authentication.'
    // },
    {
        src: statsCalculator,
        link: 'https://andrewchatch.github.io/statistics-calculator/',
        name: 'Statistics Calculator',
        description: 'A statistics calculator created using Vue.js. Users can compute summary statistics, Z-scores, T-scores, and compute probabilities in the Binomial, Poisson, and Geometric Distributions. Completed in April 2021.'
    },
    {
        src: snake,
        link: 'https://andrewchatch.github.io/snake-game/',
        name: 'Snake Game',
        description: 'A simple snake game created using vanilla JavaScript.'
    },
    // {
    //     src: budgetApp,
    //     link: 'https://andrewchatch.github.io/personal-budget/',
    //     name: 'Personal Budget App',
    //     description: 'A budgeting app created using the PERN stack. Users can add, edit, and delete expenses and income line items. Data is stored in a Postgres database.'
    // },
    {
        src: calculator,
        link: 'https://andrewchatch.github.io/JavaScript-Calculator/',
        name: 'JavaScript Calculator',
        description: 'A simple calculator created using React-Redux.'
    },
    {
        src: quote,
        link: 'https://andrewchatch.github.io/quote-generator-frontend/',
        name: 'Quote Generator',
        description: 'A quote generator app built using the PERN stack. The backend is hosted on Heroku and references a Heroku Postgres database where the quotes are stored.'
    },
    {
        src: weatherApp,
        link: 'https://andrewchatch.github.io/weather/',
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