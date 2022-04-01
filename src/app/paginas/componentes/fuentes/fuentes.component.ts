import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Fuentes } from '../interfaces/componetes.interface';
import { ComponentesService } from '../services/componentes.service';

@Component({
  selector: 'app-fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.css']
})
export class FuentesComponent implements OnInit {

  constructor(private http:HttpClient,private componentesService:ComponentesService) { }

  ngOnInit(): void {
    this.buscarOrdenadores();
  }

  espera:boolean=false;

  listaFuentes!:Fuentes[];

  buscarOrdenadores() {
    this.componentesService.sacarFuentes()
    .subscribe({
       next: (resp => {
         this.listaFuentes=resp;
         this.espera=true;
      }),
       error: resp => {
         console.log(resp)
         Swal.fire('No se han podido cargar los datos del servidor')
       }
    });
  }

}
