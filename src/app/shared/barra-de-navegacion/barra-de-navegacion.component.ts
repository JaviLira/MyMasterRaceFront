import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../paginas-protegidas/interfaces/usuario.interface';
import { AuthService } from '../../auth/services/auth.service';
import { barraService } from '../services/barra.service';

@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.css']
})
export class BarraDeNavegacionComponent implements OnInit {

  constructor(private router: Router, private barraService:barraService, private serviceAuth:AuthService) { }

  ngOnInit(): void {
    this.barraService.sacarSacarUsuario();
    this.barraService.sacarSacarRolAdministrador();
  }

  cerrarSesiopn(){
    localStorage.setItem('token',"");
    this.barraService.sesionIniciada=false;
    this.router.navigateByUrl('/auth/login');
  }

  get sesionIniciada(){
    return this.barraService.sesionIniciada;
  }

  get usuario(){
    return this.barraService.usuario;
  }

  get rolAdministrador(){
    return this.barraService.rolAdministrador;
  }

}