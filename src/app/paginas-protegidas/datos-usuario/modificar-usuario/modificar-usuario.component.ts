import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ValidatorEmailService } from 'src/app/auth/services/validatorEmail.service';
import Swal from 'sweetalert2';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name:    ['', [ Validators.required, Validators.minLength(4) ]],
    calle: ['', [ Validators.required, Validators.minLength(4) ]],
    telefono: ['', [ Validators.required, Validators.min(600000000), Validators.max(999999999) ]],
    tarjeta: ['', [ Validators.required, Validators.min(1000000000000000), Validators.max(9999999999999999) ]],
    tipopago: ['', [ Validators.required, Validators.minLength(4) ]],
    dueniotarjeta: ['', [ Validators.required, Validators.minLength(4) ]],
    caducidadTarjeta: ['', [ Validators.required, Validators.minLength(5),Validators.maxLength(5) ]],
    codigoseguridad: ['', [ Validators.required, Validators.min(100), Validators.max(999) ]],
  });

  usuario!:Usuario;

  constructor(private fb: FormBuilder, private router: Router,private usuarioService:UsuarioService, private validarEmail: ValidatorEmailService) { }

  ngOnInit(): void {
  }

  /**
   * metodo para enviar el formulario
   */

  modificar() {
    this.usuario=this.miFormulario.value
    const user = this.miFormulario.value;

    this.usuarioService.modificarUsuario(this.usuario)
    .subscribe({
       next: (resp => {
         this.router.navigateByUrl('/paginasProtegidas/datosUsuario');
      }),
       error: resp => {
         console.log(resp);
         Swal.fire('Servidor no disponible',resp.error.message, 'error')
       }
    });
  }

  /**
   * metodo para validar que cada campo sea valido
   * @param campo
   * @returns
   */

  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  get emailErrorMensaje(): string {

    const errors = this.miFormulario.get('email')?.errors!;
    if ( errors['required'] ) {
      return 'Se requiere email';
    } else if ( errors['pattern'] ) {
      return 'Introduce un email en formato email';
    } else if ( errors['laVerdad'] ) {
      return 'El email esta en uso';
    }

    return '';
  }

}
