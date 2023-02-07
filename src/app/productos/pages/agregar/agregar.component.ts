import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: ["", Validators.required]
  });

  mensaje: string = "illika";
  color: string = "green";

  ngOnInit(): void {
  }

  tieneError(control: string) : boolean{
    return this.miFormulario.get(control)?.invalid ?? false;
  }

  cmabiarTexto() {
    this.mensaje = Math.random().toString();
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
