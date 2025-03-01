import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TechImageComponent } from "./tech-image/tech-image.component";

@Component({
	selector: 'app-technology',
	imports: [CommonModule, TechImageComponent],
	templateUrl: './technology.component.html',
	styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
	images: { src: string, alt: string, label: string }[]

	constructor(@Inject(APP_BASE_HREF) private baseHref: string) {
		console.log(this.baseHref);

		this.images = [
			{
				src: `${this.baseHref}images/technologies/java-logo.png`, alt: 'Java Logo', label: 'Java'
			},
			{
				src: `${this.baseHref}images/technologies/kubernetes-logo.png`, alt: 'Kubernetes Logo', label: 'Kubernetes'
			},
			{
				src: `${this.baseHref}images/technologies/mysql-logo.png`, alt: 'MySQL Logo', label: 'MySQL'
			},
			{
				src: `${this.baseHref}images/technologies/jira.png`, alt: 'Jira Logo', label: 'Jira'
			},
			{
				src: `${this.baseHref}images/technologies/typescript.png`, alt: 'TypeScript Logo', label: 'TypeScript'
			},
			{
				src: `${this.baseHref}images/technologies/c-logo.png`, alt: 'C++ Logo', label: 'C++'
			},
			{
				src: `${this.baseHref}images/technologies/express-logo.png`, alt: 'Express Logo', label: 'Express'
			},
			{
				src: `${this.baseHref}images/technologies/git-logo.png`, alt: 'Git Logo', label: 'Git'
			},
			{
				src: `${this.baseHref}images/technologies/github-actions-logo.png`, alt: 'GitHub Actions Logo', label: 'GitHub Actions'
			},
			{
				src: `${this.baseHref}images/technologies/elasticsearch-logo.svg`, alt: 'Elasticsearch Logo', label: 'Elasticsearch'
			},
			{
				src: `${this.baseHref}images/technologies/mongodb-logo.png`, alt: 'MongoDB Logo', label: 'MongoDB'
			},
			{
				src: `${this.baseHref}images/technologies/node-logo.png`, alt: 'Node Logo', label: 'Node.js'
			},
			{
				src: `${this.baseHref}images/technologies/next-js-logo.svg`, alt: 'Next.js Logo', label: 'Next.js'
			},
			{
				src: `${this.baseHref}images/technologies/react-logo.png`, alt: 'Vue Logo', label: 'Vue'
			},
			{
				src: `${this.baseHref}images/technologies/docker.png`, alt: 'Docker Logo', label: 'Docker'
			}
		]
	}
}
