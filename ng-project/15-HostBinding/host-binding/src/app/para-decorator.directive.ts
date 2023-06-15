import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appParaDecorator]',
})
export class ParaDecoratorDirective {
  constructor() {}

  @HostBinding('style.color') textColor: string = '#444';
  @HostBinding('style.cursor') cursor: string = 'pointer';

  @HostListener('mouseenter') onMouseEnter() {
    this.textColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textColor = '#444';
  }
}
