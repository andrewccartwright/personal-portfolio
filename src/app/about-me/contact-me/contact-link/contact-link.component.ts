import { Component, Input, OnInit } from '@angular/core';
import { LinkData } from '../../../models/LinkData';

@Component({
  selector: 'app-contact-link',
  imports: [],
  templateUrl: './contact-link.component.html',
  styleUrls: ['./contact-link.component.scss', '../contact-me.component.scss']
})
export class ContactLinkComponent implements OnInit {
  @Input() linkData?: LinkData;

  ngOnInit(): void {
      
  }
}
