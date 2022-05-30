import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from '../interfaces/mensaje.interface';
import { ContactarService } from '../services/contactar.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})
export class ContactarComponent implements OnInit {

  constructor(private fb: FormBuilder, private serviceContactar:ContactarService) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    comentario:    ['', [ Validators.required, Validators.minLength(4) ]],
  });


  comentario!:string;

  enviarMensaje(){
    const mensaje:Mensaje={
      "subject":'mensaje de usuario',
      "text": this.miFormulario.get('comentario')!.value,
      "fromUser":this.serviceContactar.findEmailUser(),
    }

    this.serviceContactar.enviarMensaje(mensaje)
      .subscribe({
          next: (resp => {
            Swal.fire('Mensaje enviado');
        }),
          error: resp => {
            Swal.fire('No es posible enviar el mensaje',resp.error.mensaje)
          }
      });
  }

  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

}
