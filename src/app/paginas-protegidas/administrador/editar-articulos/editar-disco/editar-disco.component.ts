import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Discos } from '../../../interfaces/listaPedidos.interfce';
import Swal from 'sweetalert2';
import { EditarComponenteService } from '../../services/editar-componente.service';


@Component({
  selector: 'app-editar-disco',
  templateUrl: './editar-disco.component.html',
  styleUrls: ['./editar-disco.component.css']
})
export class EditarDiscoComponent implements OnInit {

  constructor(private serviceEditarComponente:EditarComponenteService, private route: ActivatedRoute, private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  nombre:string="";
  imagen:any;
  imagenes:any;
  descripcion:string="";
  cantidad:number=0;
  precio:number=0;
  tipoDisco:string="";
  capacidadDisco:number=0;
  conexionDisco:string="";

  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  enviar(){

    const disco:Discos =  {
      "id":0,
      "cantidad":this.cantidad,
      "descripcion": this.descripcion,
      "imagenes": this.imagen,
      "nombre": this.nombre,
      "precio": this.precio,
      "capacidad":this.capacidadDisco,
      "conexion":this.conexionDisco,
      "tipo":this.tipoDisco

    };
    const file=this.imagenes;
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')!.value);


      this.serviceEditarComponente.editarDisco(disco,this.route.snapshot.paramMap.get('id')!)
      .subscribe({
          next: (resp => {
            if (file==null) {
              this.router.navigateByUrl(`/paginas/componentes/discos/disco/${this.route.snapshot.paramMap.get('id')}`)
            }
            Swal.fire('Articulo modificado');
        }),
          error: resp => {
            Swal.fire('No es posible editar el articulo',resp.error.mensaje)
          }
      });

      if (file!=null) {
        this.serviceEditarComponente.subirImagen(formData,this.route.snapshot.paramMap.get('id')!)
        .subscribe({
          next: (resp => {
            this.router.navigateByUrl(`/paginas/componentes/discos/disco/${this.route.snapshot.paramMap.get('id')}`)
            Swal.fire('Articulo modificado');
        }),
          error: resp => {
            Swal.fire('No es posible subir la imagen',resp.error.mensaje)
          }
        });
      }
  }

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

}