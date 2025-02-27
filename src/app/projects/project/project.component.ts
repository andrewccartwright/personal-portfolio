import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', '../projects.component.scss']
})
export class ProjectComponent {
  @Input() project?: Project;
}
