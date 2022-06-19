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

       }
    });
  }

  calcularTotal(){
    this.valorTotal=0;
    for (let i = 0; i < this.listaArticulosCarrito.length; i++) {
      if (this.listaArticulosCarrito[i].articulo.discoduro!=null) {
        this.valorTotal=this.valorTotal+((this.listaArticulosCarrito[i].articulo.precio+this.listaArticulosCarrito[i].articulo.procesador!.precio+this.listaArticulosCarrito[i].articulo.ram!.precio+this.listaArticulosCarrito[i].articulo.fuente!.precio+this.listaArticulosCarrito[i].articulo.grafica!.precio+this.listaArticulosCarrito[i].articulo.discoduro!.precio)*this.listaArticulosCarrito[i].cantidad);
      }else{
        this.valorTotal=this.valorTotal+(this.listaArticulosCarrito[i].articulo.precio*this.listaArticulosCarrito[i].cantidad);
      }
    }
  }

  borrarArticulo(id:number){
    this.carritoService.borrarArticuloDelCarrito(id)
    .subscribe({
       next: (resp => {

         this.calcularTotal();
         if (this.listaArticulosCarrito.length>1) {
          this.buscarArticulos();
         }
         if (this.listaArticulosCarrito.length==1) {
          this.listaArticulosCarrito=[];
          this.valorTotal=0;
          this.espera=false;
         }
      }),
       error: resp => {
         Swal.fire('No se han podido borrar')
       }
    });
  }

  aumentarCantidad(id:number,articulo:Carrito){
    articulo.cantidad=articulo.cantidad+1;
    this.carritoService.cambiarCantidadDelArticuloDelCarrito(id,articulo)
    .subscribe({
       next: (resp => {
        this.buscarArticulos();

      }),
       error: resp => {
        Swal.fire('No es posible cambiar la cantidad el articulo',resp.error.mensaje)
       }
    });

  }

  disminuirCantidad(id:number,articulo:Carrito){
    articulo.cantidad=articulo.cantidad-1;
    this.carritoService.cambiarCantidadDelArticuloDelCarrito(id,articulo)
    .subscribe({
       next: (resp => {
        this.buscarArticulos();

      }),
       error: resp => {
        Swal.fire('No es posible cambiar la cantidad el articulo',resp.error.mensaje)
       }
    });
  }

}
