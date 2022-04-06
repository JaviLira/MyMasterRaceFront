import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fuentes, RAM } from '../../interfaces/componetes.interface';
import { ComponentesService } from '../../services/componentes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {

  constructor(private route: ActivatedRoute,private componentesService:ComponentesService) { }

  ngOnInit(): void {
    this.buscarArticulo();
  }

  espera:boolean=false;

  articulo!:RAM;

  buscarArticulo() {
    this.componentesService.sacarRam(this.route.snapshot.paramMap.get('id')!)
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
