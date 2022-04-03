import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../interfaces/articulo.interface';
import { ComponentesService } from '../services/componentes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http:HttpClient,private componentesService:ComponentesService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.buscarArticulo();
  }

  espera:boolean=false;

  articulo!:Articulo[];

  buscarArticulo() {
    this.componentesService.sacarArticulo(this.route.snapshot.paramMap.get('id')!)
    .subscribe({
       next: (resp => {
         this.articulo=resp;
         console.log(resp);
         this.espera=true;
      }),
       error: resp => {
         console.log(resp)
         Swal.fire('No se han podido cargar los datos del servidor')
       }
    });
  }
}
