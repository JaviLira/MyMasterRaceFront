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
  /**
   * hacer un metodo que al hacer clic en un pedido te muestre una ventana flotante
   * con los articulos que has comprado.
   */
}
