import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import Swal from 'sweetalert2';
import { Carrito } from '../../paginas/componentes/interfaces/carrito.interface';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private carritoService:CarritoService) { }

  espera:boolean=false;
  listaArticulosCarrito!:Carrito[];
  valorTotal=0;

  ngOnInit(): void {
    this.buscarArticulos();
  }

  buscarArticulos() {
    this.carritoService.buscarArticulosDelCarrito()
    .subscribe({
       next: (resp => {
         this.listaArticulosCarrito=resp;
         this.espera=true;
         this.calcularTotal();
      }),
       error: resp => {
         Swal.fire('No se han podido cargar los datos del servidor')
       }
    });
  }

  calcularTotal(){
    for (let i = 0; i < this.listaArticulosCarrito.length; i++) {
      this.valorTotal=this.valorTotal+(this.listaArticulosCarrito[i].articulo.precio*this.listaArticulosCarrito[i].cantidad);

    }
  }

  borrarArticulo(id:number){
    this.carritoService.borrarArticuloDelCarrito(id)
    .subscribe({
       next: (resp => {
         this.buscarArticulos();
         this.calcularTotal();
         console.log(this.listaArticulosCarrito.length);
         if (this.listaArticulosCarrito.length==1) {
          this.listaArticulosCarrito=[];
          this.valorTotal=0;
           this.espera==false;
         }
      }),
       error: resp => {
         Swal.fire('No se han podido borrar')
       }
    });
  }

}
