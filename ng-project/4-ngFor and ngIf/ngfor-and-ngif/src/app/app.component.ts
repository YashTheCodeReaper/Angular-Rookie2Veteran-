import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies: { name: string; language: string }[] = [];
  hidePara: boolean = false;
  constructor() {}

  genArray(): void {
    this.movies.push({ name: 'Titanic', language: 'English' });
    this.movies.push({ name: 'Slumdog Millionare', language: 'Hindi' });
    this.movies.push({ name: 'Narcos', language: 'Spanish' });
    this.movies.push({ name: '1917', language: 'English' });
    this.movies.push({ name: 'Marriage Story', language: 'English' });
  }

  togglePara(): void {
    this.hidePara = !this.hidePara;
  }
}
