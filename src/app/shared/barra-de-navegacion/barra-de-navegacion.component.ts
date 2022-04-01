import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.css']
})
export class BarraDeNavegacionComponent implements OnInit {

  constructor(private router: Router, private validarToken:AuthService) { }

  ngOnInit(): void {
  }

  cerrarSesiopn(){
    localStorage.setItem('token',"");
    this.router.navigateByUrl('/auth/login');
  }

}
