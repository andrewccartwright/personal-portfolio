import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TechImageComponent } from "./tech-image/tech-image.component";

@Component({
  selector: 'app-technology',
  imports: [CommonModule, TechImageComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  images: {src: string, alt: string, label: string}[] = [
    {
      src: '/personal-portfolio/images/technologies/java-logo.png', alt: 'Java Logo', label: 'Java'
  },
  {
      src: '/personal-portfolio/images/technologies/kubernetes-logo.png', alt: 'Kubernetes Logo', label: 'Kubernetes'
  },
  {
      src: '/personal-portfolio/images/technologies/mysql-logo.png', alt: 'MySQL Logo', label: 'MySQL'
  },
  {
      src: '/personal-portfolio/images/technologies/jira.png', alt: 'Jira Logo', label: 'Jira'
  },
  {
      src: '/personal-portfolio/images/technologies/typescript.png', alt: 'TypeScript Logo', label: 'TypeScript'
  },
  {
      src: '/personal-portfolio/images/technologies/c-logo.png', alt: 'C++ Logo', label: 'C++'
  },
  {
      src: '/personal-portfolio/images/technologies/express-logo.png', alt: 'Express Logo', label: 'Express'
  },
  {
      src: '/personal-portfolio/images/technologies/git-logo.png', alt: 'Git Logo', label: 'Git'
  },
  {
      src: '/personal-portfolio/images/technologies/github-actions-logo.png', alt: 'GitHub Actions Logo', label: 'GitHub Actions'
  },
  {
      src: '/personal-portfolio/images/technologies/elasticsearch-logo.svg', alt: 'Elasticsearch Logo', label: 'Elasticsearch'
  },
  {
      src: '/personal-portfolio/images/technologies/mongodb-logo.png', alt: 'MongoDB Logo', label: 'MongoDB'
  },
  {
      src: '/personal-portfolio/images/technologies/node-logo.png', alt: 'Node Logo', label: 'Node.js'
  },
  {
      src: '/personal-portfolio/images/technologies/next-js-logo.svg', alt: 'Next.js Logo', label: 'Next.js'
  },
  {
      src: '/personal-portfolio/images/technologies/react-logo.png', alt: 'Vue Logo', label: 'Vue'
  },
  {
      src: '/personal-portfolio/images/technologies/docker.png', alt: 'Docker Logo', label: 'Docker'
  }
  ]
}
