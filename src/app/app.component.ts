import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'personal-portfolio';

  ngOnInit(): void {
      let ubuntuLight = new FontFace('Ubuntu Light', 'url(fonts/Ubuntu-Light.ttf) format("truetype")');

      ubuntuLight.load().then(function(loadedFace) {
          document.fonts.add(loadedFace);
          document.body.style.fontFamily = '"Ubuntu Light", sans-serif';
      }).catch(function(error) {
          console.log(error);
      });
  }
}
