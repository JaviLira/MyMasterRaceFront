import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { ListaUsuariosService } from '../services/usuarios-componente.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  listUsers:Usuario[]=[];
  usuario!:Usuario;
  espera:boolean=false;
  display = false;
  rolUsuario:string='USER';

  constructor(private userComponent:ListaUsuariosService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.userComponent.sacarUsuarios().subscribe({
      next: (resp => {
        this.listUsers=resp;
        this.espera=true;
    }),
      error: resp => {
        Swal.fire('No se a podido recuperar los usuarios',resp.error.mensaje)
      }
  });
  }


  applyFilterGlobal($event: any, stringVal: any,  dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  cambiarRol(usuario:Usuario){
    this.usuario=usuario;
    this.display=true;
  }

  cambiarValorDelRol(rol:string){
    this.rolUsuario=rol;
  }

  guardarRol(){
    this.userComponent.cambiarRol(this.usuario.email,this.rolUsuario).subscribe({
      next: (resp => {
        this.listarUsuarios();
        this.display=false;
    }),
      error: resp => {
        Swal.fire('No cambiar el rol del usuario',resp.error.mensaje)
        console.log(resp)
      }
  });
  }



}
