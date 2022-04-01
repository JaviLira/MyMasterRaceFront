import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentesService } from '../services/componentes.service';
import Swal from 'sweetalert2';
import { Grafica } from '../interfaces/componetes.interface';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  constructor(private http:HttpClient,private componentesService:ComponentesService) { }

  ngOnInit(): void {
    this.buscarOrdenadores();
  }

  espera:boolean=false;

  listaGraficas!:Grafica[];

  buscarOrdenadores() {
    this.componentesService.sacarGraficas()
    .subscribe({
       next: (resp => {
         this.listaGraficas=resp;
         this.espera=true;
      }),
       error: resp => {
         console.log(resp)
         Swal.fire('No se han podido cargar los datos del servidor')
       }
    });
  }

}
