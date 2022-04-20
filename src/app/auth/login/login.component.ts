import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarraDeNavegacionComponent } from '../../shared/barra-de-navegacion/barra-de-navegacion.component';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { barraService } from 'src/app/shared/services/barra.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,private barraService:barraService) { }

  ngOnInit(): void {

  }

  /**
   * formulario template-driven
   */


  email!: string;
  password!: string;

  /**
   * metodo para enviar los datos del login a la API
   */

  login() {
    this.authService.login( this.email, this.password )
    .subscribe({
       next: (resp => {
         localStorage.setItem('token',resp.access_token!);
         this.barraService.sacarSacarUsuario();
         this.router.navigateByUrl('/paginas/ordenadores');
      }),
       error: resp => {
         Swal.fire('Usuario o contraseña invalido/s', resp.error.message, 'error')
       }
    });
  }

}
