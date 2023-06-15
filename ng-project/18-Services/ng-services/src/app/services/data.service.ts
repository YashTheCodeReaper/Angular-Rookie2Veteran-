import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  heroes = [
    { name: 'Spiderman', age: 27 },
    { name: 'Ironman', age: 50 },
    { name: 'Superman', age: 40 },
    { name: 'Wanda', age: 36 },
    { name: 'Hulk', age: 46 },
  ];

  constructor() {}

  killHero(index: number): void {
    this.heroes.splice(index, 1);
  }
}
