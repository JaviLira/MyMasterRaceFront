import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fuentes } from '../../interfaces/componetes.interface';
import { ComponentesService } from '../../services/componentes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-fuente',
  templateUrl: './fuente.component.html',
  styleUrls: ['./fuente.component.css']
})
export class FuenteComponent implements OnInit {

  constructor(private route: ActivatedRoute,private componentesService:ComponentesService,private router: Router) { }

  ngOnInit(): void {
    this.buscarArticulo();
  }

  espera:boolean=false;

  articulo!:Fuentes;

  buscarArticulo() {
    this.componentesService.sacarFuente(this.route.snapshot.paramMap.get('id')!)
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
    this.componentesService.enviarCarrito(this.articulo)
    .subscribe({
       next: (resp => {
        this.router.navigateByUrl('/paginasProtegidas/carrito');
      }),
       error: resp => {
         Swal.fire('No se a podido enviar el articulo al carrito')
       }
    });
  }

  anadirCarrito(){
    this.componentesService.enviarCarrito(this.articulo)
    .subscribe({
       next: (resp => {
        Swal.fire('Perfecto', 'El articulo se a añadido a su carrito', 'success');
      }),
       error: resp => {
         Swal.fire('No se a podido enviar el articulo al carrito')
       }
    });
  }

}
