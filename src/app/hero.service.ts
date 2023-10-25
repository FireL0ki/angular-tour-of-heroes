import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Uses an Observable object-- to return objects for asynchronous fetching of data
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}
