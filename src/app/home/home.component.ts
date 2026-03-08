import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  faArrowRight = faArrowRight;

  constructor() {
    const element = document.getElementById('welcome-title');

    if (element) {
      element.addEventListener('animationend', () => {
        element.remove(); // Removes the element from the DOM completely
      }, { once: true }); // The { once: true } option automatically removes the event listener after it runs 
    }
  }
}
