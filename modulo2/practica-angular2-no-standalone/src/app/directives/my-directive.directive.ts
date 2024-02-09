import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class ResaltarDirective {

  constructor(private ElementRef: ElementRef) {} 
    @HostListener("mouseenter") onMouseenter(){
      this.resaltar("yellow");
    }

    @HostListener("mouseenter") onMouseleave(){
      this.resaltar("null");
    }

    private resaltar(color: string){
      this.ElementRef.nativeElement.style.backgroundColor = color;
    }
  }

