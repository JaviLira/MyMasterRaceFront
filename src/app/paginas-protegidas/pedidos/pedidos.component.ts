import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Pedido } from '../interfaces/pedido.interface';
import { PedidoService } from '../services/pedido.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private servicePedido:PedidoService) { }

  ngOnInit(): void {
    this.sacarPedidos();
  }

  listaPedido!:Pedido[];
  espera:boolean=false;

  sacarPedidos(){
    this.servicePedido.sacarPedidos()
    .subscribe({
        next: (resp => {
          this.listaPedido=resp;
          this.sacarLineas();
      }),
        error: resp => {
          Swal.fire('No se puede recuperar los pedidos',resp.error.mensaje)
        }
    });
  }

  sacarLineas(){
    let contador=0;
    this.listaPedido.forEach(pedido => {

      this.servicePedido.buscarLineasPedido(`${pedido.id}`)
      .subscribe({
          next: (resp => {
            pedido.lineaPedido=resp;
            let valorTotal=0;
            for (let i = 0; i < resp.length; i++) {
              if (resp[i].articulo.discoduro!=null) {
                valorTotal=valorTotal+((resp[i].articulo.precio+resp[i].articulo.procesador!.precio+resp[i].articulo.ram!.precio+resp[i].articulo.fuente!.precio+resp[i].articulo.grafica!.precio+resp[i].articulo.discoduro!.precio)*resp[i].cantidad);
              }else{
                valorTotal=valorTotal+(resp[i].articulo.precio*resp[i].cantidad);
              }
            }
            for (let i = 0; i < pedido.lineaPedido.length; i++) {
              let element = pedido.lineaPedido[i].articulo;
              element.imagenGenerada=this.servicePedido.obtenerFoto(element);
            }
            pedido.precioTotal=valorTotal;
        }),
          error: resp => {
            Swal.fire('No se recuperar los pedidos',resp.error.mensaje)
          }
      });
      contador++;
      if (contador==this.listaPedido.length) {
        this.espera=true;
      }
    });
  }

  calcularTotal(){

  }
}
