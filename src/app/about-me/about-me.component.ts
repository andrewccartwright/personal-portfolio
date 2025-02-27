import { Component } from '@angular/core';
import { EducationComponent } from "./education/education.component";
import { TechnologyComponent } from "./technology/technology.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";

@Component({
  selector: 'app-about-me',
  imports: [EducationComponent, TechnologyComponent, ContactMeComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
