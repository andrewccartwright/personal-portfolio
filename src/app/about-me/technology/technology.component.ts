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
      src: '/images/technologies/java-logo.png', alt: 'Java Logo', label: 'Java'
  },
  {
      src: '/images/technologies/kubernetes-logo.png', alt: 'Kubernetes Logo', label: 'Kubernetes'
  },
  {
      src: '/images/technologies/mysql-logo.png', alt: 'MySQL Logo', label: 'MySQL'
  },
  {
      src: '/images/technologies/jira.png', alt: 'Jira Logo', label: 'Jira'
  },
  {
      src: '/images/technologies/typescript.png', alt: 'TypeScript Logo', label: 'TypeScript'
  },
  {
      src: '/images/technologies/c-logo.png', alt: 'C++ Logo', label: 'C++'
  },
  {
      src: '/images/technologies/express-logo.png', alt: 'Express Logo', label: 'Express'
  },
  {
      src: '/images/technologies/git-logo.png', alt: 'Git Logo', label: 'Git'
  },
  {
      src: '/images/technologies/github-actions-logo.png', alt: 'GitHub Actions Logo', label: 'GitHub Actions'
  },
  {
      src: '/images/technologies/elasticsearch-logo.svg', alt: 'Elasticsearch Logo', label: 'Elasticsearch'
  },
  {
      src: '/images/technologies/mongodb-logo.png', alt: 'MongoDB Logo', label: 'MongoDB'
  },
  {
      src: '/images/technologies/node-logo.png', alt: 'Node Logo', label: 'Node.js'
  },
  {
      src: '/images/technologies/next-js-logo.svg', alt: 'Next.js Logo', label: 'Next.js'
  },
  {
      src: '/images/technologies/react-logo.png', alt: 'Vue Logo', label: 'Vue'
  },
  {
      src: '/images/technologies/docker.png', alt: 'Docker Logo', label: 'Docker'
  }
  ]
}
