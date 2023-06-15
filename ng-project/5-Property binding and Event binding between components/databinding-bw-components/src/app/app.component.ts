import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  heroElement = [
    { name: 'Spiderman', age: 27, universe: 'MCU' },
    { name: 'Ironman', age: 52, universe: 'MCU' },
    { name: 'Superman', age: 40, universe: 'DC' },
    { name: 'Hulk', age: 48, universe: 'MCU' },
    { name: 'Wanda', age: 27, universe: 'MCU' },
    { name: 'Batman', age: 52, universe: 'DC' },
  ];

  killHero(index: any): void {
    this.heroElement.splice(index, 1);
  }
}
