import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { ComponentesService } from '../services/componentes.service';
import { RAM } from '../interfaces/componetes.interface';

@Component({
  selector: 'app-rams',
  templateUrl: './rams.component.html',
  styleUrls: ['./rams.component.css']
})
export class RamsComponent implements OnInit {

  constructor(private http:HttpClient,private componentesService:ComponentesService) { }

  ngOnInit(): void {
    this.buscarOrdenadores();
  }

  espera:boolean=false;

  listaRAMs!:RAM[];

  buscarOrdenadores() {
    this.componentesService.sacarRams()
    .subscribe({
       next: (resp => {
         this.listaRAMs=resp;
         for (let i = 0; i < this.listaRAMs.length; i++) {
          let element = this.listaRAMs[i];
          element.imagenGenerada=this.componentesService.obtenerFoto(element);
        }
         this.espera=true;
      }),
       error: resp => {
        Swal.fire('No se han podido cargar los datos del servidor')
       }
    });
  }

}
