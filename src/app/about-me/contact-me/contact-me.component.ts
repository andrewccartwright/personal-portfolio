import { Component, OnInit } from '@angular/core';
import { ContactLinkComponent } from "./contact-link/contact-link.component";
import { LinkData } from '../../models/LinkData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  imports: [ContactLinkComponent, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements OnInit {
  links: LinkData[] = [
    {
        link: "https://andrewccartwright.github.io/interactive-resume/",
        text: "Resume"
    },
    {
        link: "mailto: drew.c.cartwright@gmail.com",
        text: "Email"
    },
    {
        link: "https://www.linkedin.com/in/andrew-cartwright-8b13b0134",
        text: "LinkedIn"
    },
    {
        link: "https://github.com/andrewccartwright",
        text: "GitHub"
    }
  ]

  ngOnInit(): void {

  }
}
