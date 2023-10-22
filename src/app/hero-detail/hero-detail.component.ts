import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

// Child component of HeroesComponent. 
// This component receives the user selected hero for display from the HeroesComponent.

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
