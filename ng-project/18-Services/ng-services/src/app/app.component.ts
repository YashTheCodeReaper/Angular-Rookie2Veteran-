import { DataService } from './services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  derivedHeroes!: { name: string; age: number }[];

  constructor(private dataService: DataService) {
    this.derivedHeroes = this.dataService.heroes;
  }
}
