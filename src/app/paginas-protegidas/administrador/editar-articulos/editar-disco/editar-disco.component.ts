import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Discos } from 'src/app/paginas-protegidas/interfaces/listaPedidos.interfce';
import Swal from 'sweetalert2';
import { EditarComponenteService } from '../../services/editar-componente.service';


@Component({
  selector: 'app-editar-disco',
  templateUrl: './editar-disco.component.html',
  styleUrls: ['./editar-disco.component.css']
})
export class EditarDiscoComponent implements OnInit {

  constructor(private serviceEditarComponente:EditarComponenteService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  /*miFormulario: FormGroup = this.fb.group({
    nombre: new FormControl  ('', [  ]),
    imagenes:new FormControl  ('', [  ]),
    descripcion: new FormControl  ('', [  ]),
    precio: new FormControl  ('', [  ]),
    tipoDisco: new FormControl  ('', [  ]),
    capacidadDisco: new FormControl  ('', [  ]),
    conexionDisco: new FormControl  ('', [  ]),
    file: new FormControl  ('', [  ]),
    fileSource: new FormControl  ('', [  ]),
  });*/

  nombre:string="";
  imagenes:any;
  descripcion:string="";
  cantidad:number=0;
  precio:number=0;
  tipoDisco:string="";
  capacidadDisco:number=0;
  conexionDisco:string="";

  enviar(){
    const file=this.imagenes;
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

    const formData = new FormData();
    formData.append('file',file);


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

      this.serviceEditarComponente.subirImagen(formData,this.route.snapshot.paramMap.get('id')!)      .subscribe({
        next: (resp => {
          Swal.fire('Imagen subida');
      }),
        error: resp => {
          console.log(resp);
          Swal.fire('No es posible subir la imagen',resp.error.mensaje)
        }
    });


  }

}
