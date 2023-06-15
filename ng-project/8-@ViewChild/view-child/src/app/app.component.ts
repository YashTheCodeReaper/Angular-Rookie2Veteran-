import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movie: string = '';
  @ViewChild('favMovie') favouriteMovie!: ElementRef;

  constructor() {}

  regMovie() {
    this.movie = this.favouriteMovie.nativeElement.value;
  }
}
