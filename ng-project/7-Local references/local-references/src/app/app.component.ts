import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';

  constructor() {}

  onEnterName(nameInputElement: HTMLInputElement) {
    this.name = nameInputElement.value;
  }
}
