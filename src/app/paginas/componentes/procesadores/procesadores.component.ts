import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Procesador } from '../interfaces/componetes.interface';
import { ComponentesService } from '../services/componentes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-procesadores',
  templateUrl: './procesadores.component.html',
  styleUrls: ['./procesadores.component.css']
})
export class ProcesadoresComponent implements OnInit {

  constructor(private http:HttpClient,private componentesService:ComponentesService) { }

  ngOnInit(): void {
    this.buscarOrdenadores();
  }

  espera:boolean=false;

  listaProcesadores!:Procesador[];

  buscarOrdenadores() {
    this.componentesService.sacarProcesadores()
    .subscribe({
       next: (resp => {
         this.listaProcesadores=resp;
         this.espera=true;
      }),
       error: resp => {
         Swal.fire('No se han podido cargar los datos del servidor')
       }
    });
  }

}
