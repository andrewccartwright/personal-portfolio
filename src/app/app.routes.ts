import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'about-me',
        component: AboutMeComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
