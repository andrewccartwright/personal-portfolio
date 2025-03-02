import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

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

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes, withHashLocation())
    ]
});
