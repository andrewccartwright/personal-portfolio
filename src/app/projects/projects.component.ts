import { Component } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectComponent } from "./project/project.component";
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[]

  baseHref = environment.baseHref;
  
  constructor() {
    let ubuntuMedium = new FontFace('Ubuntu Medium', 'url(fonts/Ubuntu-Medium.ttf) format("truetype")');

    ubuntuMedium.load().then((loadedFace) => {
        document.fonts.add(loadedFace);
        let labels: HTMLCollectionOf<Element> = document.getElementsByClassName('project-img-label');

        for (let i = 0; i < labels.length; i++) {
          labels[i].setAttribute('style', 'font-family: "Ubuntu Medium"');
        }        
    }).catch((error) => {
        console.log(error);
    });

    this.projects = [
      {
        src: `${this.baseHref}images/project-images/sunny-street.png`,
        link: 'https://sunnystreet.app',
        name: 'Sunny Street - Charity Donation App',
        description: 'I built the backend for a charity donation and auction management app. I handled user authentication, including passkeys, integrated with Stripe to support donations, and set up live bidding on auction items to raise money for charities. I had a wonderful time working on this meaningful project and learned a lot from the experience.'
      },
      {
        src: `${this.baseHref}images/project-images/hj-cartwright.png`,
        link: "https://hjcartwright.com",
        name: "HJ Cartwright - Author Website",
        description: "I created a dynamic and visually engaging website for my wife to market and promote her literary works (side note -- her books are incredible, check them out!). The primary goal is to establish an online platform that not only showcases her books but also provides a seamless and enjoyable experience for visitors, encouraging book exploration and sales."
      },
      {
        src: `${this.baseHref}images/project-images/tetris.png`,
        link: "https://github.com/andrewccartwright/tetris_game",
        name: 'Tetris',
        description: 'This is a Java-based Tetris game built using JavaFX, Spring Boot, and Apache Maven. I had a lot of fun building this game and hope you enjoy it as well if you give it a try!'
      },
      {
        src: `${this.baseHref}images/project-images/quasigroups.png`,
        link: 'https://andrewccartwright.github.io/quasigroups',
        name: 'Isomorphisms and Permutations of Quasigroups',
        description: `In my last year of undergrad, I completed a research project looking at the properties of quasigroups of order 5. At the time, I created a small program in C++ to check for isomorphism and to perform permutations on the elements of the quasigroup. I recently created this site so that I could host this project publicly.`
      },
      {
        src: `${this.baseHref}images/project-images/proration.png`,
        link: 'https://andrewccartwright.github.io/proration-tool/',
        name: 'Proration Tool',
        description: 'This tool can be used to calculate prorated invoice amounts by entering dates, number of users, and price per user.'
      }
    ]
  }
}
