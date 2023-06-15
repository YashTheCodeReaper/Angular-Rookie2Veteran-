import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  persons = [
    { name: 'Yashwanth', age: 22 },
    { name: 'Jimmy', age: 15 },
    { name: 'Charles', age: 20 },
    { name: 'Howard', age: 42 },
    { name: 'Kim', age: 17 },
  ];
}
