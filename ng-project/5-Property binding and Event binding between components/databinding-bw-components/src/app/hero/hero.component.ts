import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  @Input() heroElement!: { name: string; age: number; universe: string };
  @Input() i!: number;

  @Output() killHeroElement = new EventEmitter<number>();

  constructor() {}

  killHero(index: number): void {
    this.killHeroElement.emit(index);
  }

  ngOnInit(): void {}
}
