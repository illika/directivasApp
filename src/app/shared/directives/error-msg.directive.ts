import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;

  @Input() color: string = "red";
  @Input() mensaje: string = "Este campo es requerido";

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log("OnInit DIrective");
    this.setColor();
    this.setMensaje();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["mensaje"]) {
      const msg = changes["mensaje"].currentValue;
      this.htmlElement.nativeElement.innerText = msg;
    }
    if(changes["color"]) {
      const clr = changes["color"].currentValue;
      this.htmlElement.nativeElement.style.color = clr;
    }

    console.log(changes);
    
  }

  setColor(): void {
    this.htmlElement.nativeElement.classList.add("form-text");
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
