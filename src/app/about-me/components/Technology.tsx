import TechImage from './TechImage';
import '../../css/about-me/Technology.css';

import typescriptLogo from '../../assets/images/technologies/typescript.png';
import bootstrapLogo from '../../assets/images/technologies/bootstrap-logo.png';
import cLogo from '../../assets/images/technologies/c-logo.png';
import expressLogo from '../../assets/images/technologies/express-logo.png';
import gitLogo from '../../assets/images/technologies/git-logo.png';
import javaLogo from '../../assets/images/technologies/java-logo.png';
import mongodbLogo from '../../assets/images/technologies/mongodb-logo.png';
import nodeLogo from '../../assets/images/technologies/node-logo.png';
import nextJsLogo from '../../assets/images/technologies/next-js-logo.svg';
import reactLogo from '../../assets/images/technologies/react-logo.png';
import dockerLogo from '../../assets/images/technologies/docker.png';
import jiraLogo from '../../assets/images/technologies/jira.png';
import actionsLogo from '../../assets/images/technologies/github-actions-logo.png';
import kubernetesLogo from '../../assets/images/technologies/kubernetes-logo.png';
import mysqlLogo from '../../assets/images/technologies/mysql-logo.png';
import elasticsearchLogo from '../../assets/images/technologies/elasticsearch-logo.svg';
import { StaticImageData } from 'next/image';

const imgs: {src: StaticImageData, alt: string, label: string}[] = [
    {
        src: javaLogo, alt: 'Java Logo', label: 'Java'
    },
    {
        src: kubernetesLogo, alt: 'Kubernetes Logo', label: 'Kubernetes'
    },
    {
        src: mysqlLogo, alt: 'MySQL Logo', label: 'MySQL'
    },
    {
        src: jiraLogo, alt: 'Jira Logo', label: 'Jira'
    },
    {
        src: typescriptLogo, alt: 'TypeScript Logo', label: 'TypeScript'
    },
    {
        src: cLogo, alt: 'C++ Logo', label: 'C++'
    },
    {
        src: expressLogo, alt: 'Express Logo', label: 'Express'
    },
    {
        src: gitLogo, alt: 'Git Logo', label: 'Git'
    },
    {
        src: actionsLogo, alt: 'GitHub Actions Logo', label: 'GitHub Actions'
    },
    {
        src: elasticsearchLogo, alt: 'Elasticsearch Logo', label: 'Elasticsearch'
    },
    {
        src: mongodbLogo, alt: 'MongoDB Logo', label: 'MongoDB'
    },
    {
        src: nodeLogo, alt: 'Node Logo', label: 'Node.js'
    },
    {
        src: nextJsLogo, alt: 'Next.js Logo', label: 'Next.js'
    },
    {
        src: reactLogo, alt: 'Vue Logo', label: 'Vue'
    },
    {
        src: dockerLogo, alt: 'Docker Logo', label: 'Docker'
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