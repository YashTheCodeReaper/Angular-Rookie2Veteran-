import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  // Variable delcarations
  name: string = 'Tetherfi';
  display: boolean = false;
  hidePara: boolean = false;

  constructor() {
    setTimeout(() => {
      this.display = true;
    }, 5000);
  }

  greetingMessage(): string {
    return `Hello from ${this.name}`;
  }

  onToggle(): void {
    this.hidePara = !this.hidePara;
  }

  ngOnInit(): void {}
}
