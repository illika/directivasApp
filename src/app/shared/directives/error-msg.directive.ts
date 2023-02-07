import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = "indigo";
  private _mensaje: string = "Por defecto";

  htmlElement: ElementRef<HTMLElement>;

  //@Input() color: string = "red";
  @Input() set color(value: string) {
    this.htmlElement.nativeElement.style.color = value;
    this._color = value;
  }

  //@Input() mensaje: string = "Este campo es requerido";
  @Input() set mensaje(value: string) {
    this.htmlElement.nativeElement.innerText = value;
    this._mensaje = value;
    console.log(this.mensaje);
    
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log("OnInit DIrective");
    this.setColor();
    this.setMensaje();
    this.setEstilos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*
    if(changes["mensaje"]) {
      const msg = changes["mensaje"].currentValue;
      this.htmlElement.nativeElement.innerText = msg;
    }
    if(changes["color"]) {
      const clr = changes["color"].currentValue;
      this.htmlElement.nativeElement.style.color = clr;
    }

    console.log(changes);
    */
    
  }

  setEstilos() {
    this.htmlElement.nativeElement.classList.add("form-text");
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
