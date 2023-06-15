import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit triggered!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered!');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck triggered!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit triggered!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit triggered!');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked triggered!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy triggered!');
  }
}
