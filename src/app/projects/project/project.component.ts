import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', '../projects.component.scss']
})
export class ProjectComponent {
  @Input() project?: Project;
}
