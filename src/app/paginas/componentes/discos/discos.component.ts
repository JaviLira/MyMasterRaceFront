import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { ComponentesService } from '../services/componentes.service';
import { Discos } from '../interfaces/componetes.interface';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.css']
})
export class DiscosComponent implements OnInit {

  constructor(private http:HttpClient,private componentesService:ComponentesService) { }

  ngOnInit(): void {
    this.buscarOrdenadores();
  }

  espera:boolean=false;

  listaDiscos!:Discos[];

  buscarOrdenadores() {
    this.componentesService.sacarDiscos()
    .subscribe({
       next: (resp => {
         this.listaDiscos=resp;
         for (let i = 0; i < this.listaDiscos.length; i++) {
           let element = this.listaDiscos[i];
           element.imagenGenerada=this.componentesService.obtenerFoto(element);

         }
         this.espera=true;
      }),
       error: resp => {
         console.log(resp)
         Swal.fire('No se han podido cargar los datos del servidor')
       }
    });
  }

}
