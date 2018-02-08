import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLogo]'
})
export class LogoDirective {

  protected text = "Fragment";

  constructor(el: ElementRef) {
    el.nativeElement.style.color = '#4169E1';
    el.nativeElement.style.height = "100%";
    el.nativeElement.style.lineHeight = "36px";
    el.nativeElement.style.textDecoration = "none";
    el.nativeElement.style.fontSize = ".9rem";
    el.nativeElement.style.fontWeight = "bold";
    el.nativeElement.style.marginLeft = ".5rem";
    el.nativeElement.innerText = this.text;
  }

}