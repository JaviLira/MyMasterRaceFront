import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { Procesador } from '../../interfaces/componetes.interface';
import { ComponentesService } from '../../services/componentes.service';


@Component({
  selector: 'app-procesador',
  templateUrl: './procesador.component.html',
  styleUrls: ['./procesador.component.css']
})
export class ProcesadorComponent implements OnInit {

  constructor(private route: ActivatedRoute,private componentesService:ComponentesService,private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    this.buscarArticulo();
    this.validar();
  }

  espera:boolean=false;
  validarToken:boolean=false;
  articulo!:Procesador;

  buscarArticulo() {
    this.componentesService.sacarProcesador(this.route.snapshot.paramMap.get('id')!)
    .subscribe({
       next: (resp => {
         this.articulo=resp;
         this.espera=true;
      }),
       error: resp => {
         console.log(resp)
         Swal.fire('No se han podido cargar los datos del servidor')
       }
    });
  }

  comprar(){
    this.validar();
    if (this.validarToken) {
       this.componentesService.enviarCarrito(this.articulo)
    .subscribe({
      next: (resp => {
        this.router.navigateByUrl('/paginasProtegidas/carrito');
      }),
      error: resp => {
        Swal.fire('No se a podido enviar el articulo al carrito')
      }
    });
  }else{
    Swal.fire('Necesitas estar logeado')
  }

  }

  anadirCarrito(){
    this.validar();
    if (this.validarToken) {
      this.componentesService.enviarCarrito(this.articulo)
      .subscribe({
        next: (resp => {
          Swal.fire('Perfecto', 'El articulo se a añadido a su carrito', 'success');
        }),
        error: resp => {
          Swal.fire('No se a podido enviar el articulo al carrito')
        }
      });
    }else{
      Swal.fire('Necesitas estar logeado')
    }
  }
  validar(){
    this.authService.validarToken()
    .subscribe({
       next: (resp => {
        this.validarToken=true;
         return true;
      }),
       error: resp => {
        this.validarToken=false;
        return false;
       }
    });
  }

}
