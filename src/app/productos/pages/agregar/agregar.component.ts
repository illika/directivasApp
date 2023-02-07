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
  color: string = "red";

  ngOnInit(): void {
  }

  tieneError() : boolean{
    return this.miFormulario.get('nombre')?.invalid ?? false;
  }

  cmabiarTexto() {
    this.mensaje = "katari";
  }

  cambiarColor() {
    this.color = "green";
  }

}
