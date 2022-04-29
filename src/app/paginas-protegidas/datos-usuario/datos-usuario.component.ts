import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario.interface';
import { LineaPedido } from '../interfaces/listaPedidos.interfce';
import { Pedido } from '../interfaces/pedido.interface';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {

  constructor(private serviceUsuario:UsuarioService) { }

  ngOnInit(): void {
    this.sacarUsuario();
  }

  pago:boolean=false;
  espera:boolean=false;
  usuario!:Usuario;
  mensajeHijo!:LineaPedido;
  outprint:boolean=false;

  mostrarTipoPago(){
    this.pago=true;
  }

  ocultarTipoPago(){
    this.pago=false;
  }

  sacarUsuario(){
    this.serviceUsuario.buscarUsuario()
    .subscribe({
        next: (resp => {
          this.usuario=resp;
          this.espera=true;
      }),
        error: resp => {
          Swal.fire('Usuario indispuesto',resp.error.mensaje)
        }
    });
  }

}
