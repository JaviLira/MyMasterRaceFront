import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../interfaces/pedido.interface';
import { PedidoService } from '../../services/pedido.service';
import Swal from 'sweetalert2';
import { LineaPedido } from '../../interfaces/listaPedidos.interfce';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private servicePedido:PedidoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sacarLineas();
  }

  listaLinea!:LineaPedido[];
  espera:boolean=false;
  valorTotal=0;

  sacarLineas(){


    this.servicePedido.buscarLineasPedido(this.route.snapshot.paramMap.get('id')!)
    .subscribe({
        next: (resp => {
          this.listaLinea=resp;
          this.espera=true;
          this.calcularTotal();
      }),
        error: resp => {
          Swal.fire('No se recuperar los pedidos',resp.error.mensaje)
        }
    });
  }

  calcularTotal(){
    for (let i = 0; i < this.listaLinea.length; i++) {
      if (this.listaLinea[i].articulo.discoduro!=null) {
        this.valorTotal=this.valorTotal+((this.listaLinea[i].articulo.precio+this.listaLinea[i].articulo.procesador!.precio+this.listaLinea[i].articulo.ram!.precio+this.listaLinea[i].articulo.fuente!.precio+this.listaLinea[i].articulo.grafica!.precio+this.listaLinea[i].articulo.discoduro!.precio)*this.listaLinea[i].cantidad);
      }else{
        this.valorTotal=this.valorTotal+(this.listaLinea[i].articulo.precio*this.listaLinea[i].cantidad);
      }
    }
  }


}
