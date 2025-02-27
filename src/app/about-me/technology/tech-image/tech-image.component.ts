import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-image',
  imports: [],
  templateUrl: './tech-image.component.html',
  styleUrls: ['./tech-image.component.scss', '../technology.component.scss']
})
export class TechImageComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() label: string = '';

  ngOnInit(): void {
    
  }

}
