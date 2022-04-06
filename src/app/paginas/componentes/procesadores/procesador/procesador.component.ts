import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Procesador } from '../../interfaces/componetes.interface';
import { ComponentesService } from '../../services/componentes.service';


@Component({
  selector: 'app-procesador',
  templateUrl: './procesador.component.html',
  styleUrls: ['./procesador.component.css']
})
export class ProcesadorComponent implements OnInit {

  constructor(private route: ActivatedRoute,private componentesService:ComponentesService) { }

  ngOnInit(): void {
    this.buscarArticulo();
  }

  espera:boolean=false;

  articulo!:Procesador;

  buscarArticulo() {
    this.componentesService.sacarProcesador(this.route.snapshot.paramMap.get('id')!)
    .subscribe({
       next: (resp => {
         this.articulo=resp;
         this.espera=true;
      }),
       error: resp => {
         console.log(resp)
         Swal.fire('No se han podido cargar los datos del servidor')
       }
    });
  }

}
