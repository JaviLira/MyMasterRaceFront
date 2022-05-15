import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discos } from '../../../../paginas/interfaces/ordenadores.interface';
import Swal from 'sweetalert2';
import { EditarComponenteService } from '../../services/editar-componente.service';


@Component({
  selector: 'app-editar-disco',
  templateUrl: './editar-disco.component.html',
  styleUrls: ['./editar-disco.component.css']
})
export class EditarDiscoComponent implements OnInit {

  constructor(private serviceEditarComponente:EditarComponenteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  nombre:string="";
  imagenes:string="";
  descripcion:string="";
  cantidad:number=0;
  precio:number=0;
  tipoDisco:string="";
  capacidadDisco:number=0;
  conexionDisco:string="";

  enviar(){

    const disco:Discos =  {
      "id":0,
      "cantidad":this.cantidad,
      "descripcion": this.descripcion,
      "imagenes": this.imagenes,
      "nombre": this.nombre,
      "precio": this.precio,
      "capacidad":this.capacidadDisco,
      "conexion":this.conexionDisco,
      "tipo":this.tipoDisco

    };

      this.serviceEditarComponente.editarDisco(disco,this.route.snapshot.paramMap.get('id')!)
      .subscribe({
          next: (resp => {
            Swal.fire('Articulo creado');
        }),
          error: resp => {
            console.log(resp);
            Swal.fire('No es posible crear el articulo',resp.error.mensaje)
          }
      });


  }

}
