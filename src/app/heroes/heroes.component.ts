import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.sass']
// })

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
<<<<<<< Updated upstream

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }
=======
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

>>>>>>> Stashed changes
  ngOnInit() {

  }

<<<<<<< Updated upstream
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


=======
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
>>>>>>> Stashed changes
}


