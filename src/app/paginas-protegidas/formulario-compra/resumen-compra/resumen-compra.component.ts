import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../interfaces/pedido.interface';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Ordenadores } from '../../../paginas/interfaces/ordenadores.interface';
import { ArticuloNoUsarPorAhora } from 'src/app/paginas/componentes/interfaces/articulo.interface';
import { LineaPedido } from '../../interfaces/listaPedidos.interfce';


@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.css']
})
export class ResumenCompraComponent implements OnInit {

  constructor(private sevicePedido:PedidoService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.traerPedido();
  }

  esperaPedido:boolean=false;
  esperaArticulos:boolean=false;
  pedido!:Pedido;
  lineaPedido!:LineaPedido[];
  valorTotal=0;

  traerPedido(){
    this.sevicePedido.buscarPedio(this.route.snapshot.paramMap.get('id')!)
    .subscribe({
        next: (resp => {
          this.pedido=resp;
          this.esperaPedido=true;
      }),
        error: resp => {
          Swal.fire('El pedido no se a encontrado',resp.error.mensaje)
        }
    });

    this.sevicePedido.buscarLineasPedido(this.route.snapshot.paramMap.get('id')!)
    .subscribe({
        next: (resp => {
          this.lineaPedido=resp;
          for (let i = 0; i < this.lineaPedido.length; i++) {
            let element = this.lineaPedido[i].articulo;
            element.imagenGenerada=this.sevicePedido.obtenerFoto(element);
          }
          this.esperaArticulos=true;
          this.calcularTotal();
      }),
        error: resp => {
          Swal.fire('El ordenador no se a encontrado',resp.error.mensaje)
        }
    });
  }

  calcularTotal(){
    for (let i = 0; i < this.lineaPedido.length; i++) {
      if (this.lineaPedido[i].articulo.discoduro!=null) {
        this.valorTotal=this.valorTotal+((this.lineaPedido[i].articulo.precio+this.lineaPedido[i].articulo.procesador!.precio+this.lineaPedido[i].articulo.ram!.precio+this.lineaPedido[i].articulo.fuente!.precio+this.lineaPedido[i].articulo.grafica!.precio+this.lineaPedido[i].articulo.discoduro!.precio)*this.lineaPedido[i].cantidad);
      }else{
        this.valorTotal=this.valorTotal+(this.lineaPedido[i].articulo.precio*this.lineaPedido[i].cantidad);
      }
    }
  }

}
