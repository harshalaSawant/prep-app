import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appHighlightError]'
})
export class ErrorHighlightDirective {
  constructor(private el: ElementRef,
    private renderer: Renderer2) {}

  @HostListener('change')
  checkLength() {
    if (this.el.nativeElement.value.length > 10) {
      this.el.nativeElement.style.border = '2px solid red';
      // this.el.nativeElement.style.outline = '2px solid red';
      // this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red')
    }
  }
}