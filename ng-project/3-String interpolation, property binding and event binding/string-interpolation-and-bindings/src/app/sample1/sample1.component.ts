import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css'],
})
export class Sample1Component implements OnInit {
  name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
