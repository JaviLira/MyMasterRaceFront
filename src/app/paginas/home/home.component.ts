import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ordenadores } from '../interfaces/ordenadores.interface';
import { OrdenadorService } from '../services/ordenador.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,private ordenadorService:OrdenadorService) { }

  ngOnInit(): void {
    this.buscarOrdenadores();
  }

  espera:boolean=false;

  listaOrdenadores!:Ordenadores[];

  /**
   * metodo que saca la lista de ordenadores de la API y en el momento que los tiene
   * cambia la espera a tru para que se muestren
   */

  buscarOrdenadores() {
    this.ordenadorService.sacarOrdenadores()
    .subscribe({
       next: (resp => {
         this.listaOrdenadores=resp.slice(resp.length-5);
         this.espera=true;
      }),
       error: resp => {
         console.log(resp)
         Swal.fire('No se han podido cargar los datos del servidor')
       }
    });
  }

}
