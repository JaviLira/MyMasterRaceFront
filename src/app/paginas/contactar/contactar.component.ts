import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})
export class ContactarComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    comentario:    ['', [ Validators.required, Validators.minLength(4) ]],
  });


  comentario!:string;

  enviarMensaje(){
    console.log(this.miFormulario.value);
  }

  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

}
