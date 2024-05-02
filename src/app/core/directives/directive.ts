import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownFocus]',
})
export class DropdownFocusDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focusin', ['$event'])
  onFocusIn(event: Event) {
    const dropdown = event.target as HTMLElement;

    if (
      dropdown.classList.contains('p-focus') &&
      !dropdown.classList.contains('p-disabled')
    ) {
      this.renderer.addClass(
        this.el.nativeElement.parentElement,
        'borderColor'
      );
    }
  }

  @HostListener('focusout', ['$event'])
  onFocusOut(event: Event) {
    this.renderer.removeClass(
      this.el.nativeElement.parentElement,
      'borderColor'
    );
  }
}
