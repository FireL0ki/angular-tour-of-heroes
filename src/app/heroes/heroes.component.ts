import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

// Parent component of HeroDetailComponent. 
// This component sends the user selected hero for display to the Hero Details component.

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  selectedHero?: Hero;

  heroes: Hero[] = [];

    // constructor should be limited to wiring parameters to properties. It should not 'do anything' (ex. call a function, etc.)
    constructor(private heroService: HeroService, private messageService: MessageService) { }

  // Angular initialization function, runs on init.
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // an RxJS (Reactive Extensions for JavaScript) method; calls the getHeroes function from the heroService module. 
  // The subscribe() function listens to the observable and passes the emitted data to the callback function (heroes => this.heroes = heroes)
  // The arrow function takes the parameter heroes, and when the observable emits data 'heroes' (the heroes list), assigns the data 'heroes' to the this.heroes class.
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
