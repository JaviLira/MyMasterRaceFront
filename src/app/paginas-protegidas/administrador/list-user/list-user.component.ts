import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { ListaUsuariosService } from '../services/usuarios-componente.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  listUsers:Usuario[]=[];
  espera:boolean=false;

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
        console.log(resp)
      }
  });
  }


  applyFilterGlobal($event: any, stringVal: any,  dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

}
