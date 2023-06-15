import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css'],
})
export class Sample1Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toHome() {
    this.router.navigate(['/']);
  }
}
