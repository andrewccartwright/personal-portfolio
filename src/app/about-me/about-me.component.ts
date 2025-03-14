import { Component, OnInit } from '@angular/core';
import { EducationComponent } from "./education/education.component";
import { TechnologyComponent } from "./technology/technology.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about-me',
  imports: [EducationComponent, TechnologyComponent, ContactMeComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  baseHref = environment.baseHref;

  ngOnInit(): void {
    let profilePicUrl = this.baseHref + 'images/profile-pic.jpg';

    let profilePic = document.getElementById('profile-pic');

    if (profilePic) {
      profilePic.setAttribute('style', 'background-image: url(' + profilePicUrl + ')');
    }
  }

}
