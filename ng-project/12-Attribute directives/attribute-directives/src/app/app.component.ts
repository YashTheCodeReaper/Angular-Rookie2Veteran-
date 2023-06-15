import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dangerText: boolean = false;

  constructor() {}

  onDanger() {
    this.dangerText = !this.dangerText;
  }
}
