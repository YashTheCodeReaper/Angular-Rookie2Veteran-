import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParaDecorator]',
})
export class ParaDecoratorDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'display',
      'inline-block'
    );
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '100px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', '10');
  }
}
