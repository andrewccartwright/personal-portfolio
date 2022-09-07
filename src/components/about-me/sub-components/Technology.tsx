import TechImage from "./TechImage";
import '../../../css/about-me/sub-components/Technology.css';

import typescriptLogo from '../../../images/technologies/typescript.png';
import bootstrapLogo from '../../../images/technologies/bootstrap-logo.png';
import cLogo from '../../../images/technologies/c-logo.png';
import d3Logo from '../../../images/technologies/d3-logo.png';
import expressLogo from '../../../images/technologies/express-logo.png';
import gitLogo from '../../../images/technologies/git-logo.png';
import htmlLogo from '../../../images/technologies/html5.svg';
import javaLogo from '../../../images/technologies/java-logo.png';
import jQueryLogo from '../../../images/technologies/jQuery-logo.png';
import mongodbLogo from '../../../images/technologies/mongodb-logo.png';
import nodeLogo from '../../../images/technologies/node-logo.png';
import reactLogo from '../../../images/technologies/react-logo.png';
import vueLogo from '../../../images/technologies/vue-logo.png';
import sqlLogo from '../../../images/technologies/sql-logo.png';
import dockerLogo from '../../../images/technologies/docker.png';
import jiraLogo from '../../../images/technologies/jira.png';


const imgs: {src: string, alt: string, label: string}[] = [
    {
        src: typescriptLogo, alt: 'TypeScript Logo', label: 'TypeScript'
    },
    {
        src: javaLogo, alt: 'Java Logo', label: 'Java'
    },
    {
        src: cLogo, alt: 'C++ Logo', label: 'C++'
    },
    {
        src: sqlLogo, alt: 'SQL Logo', label: 'SQL'
    },
    {
        src: d3Logo, alt: 'd3 Logo', label: 'D3'
    },
    {
        src: expressLogo, alt: 'Express Logo', label: 'Express'
    },
    {
        src: gitLogo, alt: 'Git Logo', label: 'Git'
    },
    {
        src: htmlLogo, alt: 'HTML Logo', label: 'HTML5'
    },
    {
        src: jQueryLogo, alt: 'jQuery Logo', label: 'jQuery'
    },
    {
        src: bootstrapLogo, alt:'Bootstrap Logo', label:'Bootstrap'
    },
    {
        src: mongodbLogo, alt: 'MongoDB Logo', label: 'MongoDB'
    },
    {
        src: nodeLogo, alt: 'Node Logo', label: 'Node.js'
    },
    {
        src: reactLogo, alt: 'React Logo', label: 'React'
    },
    {
        src: vueLogo, alt: 'Vue Logo', label: 'Vue'
    },
    {
        src: dockerLogo, alt: 'Docker Logo', label: 'Docker'
    },
    {
        src: jiraLogo, alt: 'Jira Logo', label: 'Jira'
    }
]

const Technology = (props: {}) => {
    console.log(bootstrapLogo);

    return (
        <div id="tech-section" className="text-center">
            <h2 id='tech-intro'>I have experience working with the following technologies:</h2>

            <div id='tech-imgs'>
                {
                    imgs.map((img, i) => {
                        return (
                            <TechImage obj={img} key={i}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Technology;