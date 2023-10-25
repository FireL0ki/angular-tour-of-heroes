import { Component } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';

// Parent component of HeroDetailComponent. 
// This component sends the user selected hero for display to the Hero Details component.

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[] = [];
  
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // method to retrieve heroes from the service
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  // Angular initialization function, runs on init.
  ngOnInit(): void {
    this.getHeroes();
  }

  // constructor should be limited to wiring parameters to properties. It should not 'do anything' (ex. call a function, etc.)
  constructor(private heroService: HeroService) {} // todo: Here?

}
