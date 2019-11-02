// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.sass']
// })
export class AppComponent {
  title = 'angular-tour-of-heroes';
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';
  constructor() { }

  ngOnInit() {
  }


}
