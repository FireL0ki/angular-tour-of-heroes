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

  heroes = HEROES;
  
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
