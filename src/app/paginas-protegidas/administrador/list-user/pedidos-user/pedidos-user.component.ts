import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../../../interfaces/pedido.interface';
import { PedidosUsuarioService } from '../../services/pedidos-user-componente.service';
import Swal from 'sweetalert2';
import { barraService } from 'src/app/shared/services/barra.service';


@Component({
  selector: 'app-pedidos-user',
  templateUrl: './pedidos-user.component.html',
  styleUrls: ['./pedidos-user.component.css']
})
export class PedidosUserComponent implements OnInit {

  constructor(private route: ActivatedRoute,private pedidoUserService:PedidosUsuarioService,private barraService:barraService) { }

  ngOnInit(): void {
    this.listarPedidosUsuario();
  }

  display = false;
  espera:boolean=false;
  listaPedido:Pedido[]=[];
  pedidoEdit!:Pedido;

  idUsuario:string=this.route.snapshot.paramMap.get('id')!;

  listarPedidosUsuario(){
    this.pedidoUserService.sacarPedidosUsuario(this.route.snapshot.paramMap.get('id')!).subscribe({
      next: (resp => {
        this.listaPedido=resp;
        this.sacarLineas();
    }),
      error: resp => {
        Swal.fire('No ha podido recuperar los pedidos',resp.error.mensaje)
      }
    });
  }

  sacarLineas(){
    let contador=0;
    this.listaPedido.forEach(pedido => {

      this.pedidoUserService.buscarLineasPedido(`${pedido.id}`)
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
              element.imagenGenerada=this.pedidoUserService.obtenerFoto(element);
            }
            pedido.precioTotal=valorTotal;
        }),
          error: resp => {
            Swal.fire('No ha podido recuperar los pedidos',resp.error.mensaje)
          }
      });
      contador++;
      if (contador==this.listaPedido.length) {
        this.espera=true;
      }
    });
  }

  get rolAdministrador(){
    return this.barraService.rolAdministrador;
  }

  get usuario(){
    return this.barraService.usuario;
  }

  cambiarEstado(pedido:Pedido) {
    this.pedidoEdit=pedido;
    this.display = true;
  }

  cambiarValorDelEstado(texto:string){
    this.pedidoEdit.estado=texto;
  }

  editarPedido(){
    this.pedidoUserService.modificarPedido(this.route.snapshot.paramMap.get('id')!,this.pedidoEdit).subscribe({
      next: (resp => {
        this.listarPedidosUsuario();
        this.display=false;

    }),
      error: resp => {
        Swal.fire('No ha podido recuperar los pedidos',resp.error.mensaje)
      }
    });

  }

}
