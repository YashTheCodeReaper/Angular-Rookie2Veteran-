import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appParaDecorator]',
})
export class ParaDecoratorDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'inherit');
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }
}
