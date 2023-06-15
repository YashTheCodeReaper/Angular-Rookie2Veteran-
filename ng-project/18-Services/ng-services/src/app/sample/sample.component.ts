import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  @Input() hero!: { name: string; age: number };
  @Input() i!: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onRemoveHero(index: number): void {
    this.dataService.killHero(index);
    console.log(this.dataService.heroes);
  }
}
