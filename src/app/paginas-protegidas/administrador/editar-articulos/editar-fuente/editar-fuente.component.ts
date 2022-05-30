import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Fuentes, Procesador } from '../../../interfaces/listaPedidos.interfce';
import { EditarComponenteService } from '../../services/editar-componente.service';


@Component({
  selector: 'app-editar-fuente',
  templateUrl: './editar-fuente.component.html',
  styleUrls: ['./editar-fuente.component.css']
})
export class EditarFuenteComponent implements OnInit {

  constructor(private serviceEditarComponente:EditarComponenteService, private route: ActivatedRoute, private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  nombre:string="";
  imagen:any;
  imagenes:any;
  descripcion:string="";
  cantidad:number=0;
  precio:number=0;
  certificacionFuente!:string;
  potenciaFuente!:number;


  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  enviar(){

    const fuente:Fuentes =  {
      "id":0,
      "cantidad":this.cantidad,
      "descripcion": this.descripcion,
      "imagenes": this.imagen,
      "nombre": this.nombre,
      "precio": this.precio,
      "certificacion":this.certificacionFuente,
      "potencia":this.potenciaFuente
    };
    const file=this.imagenes;
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')!.value);


      this.serviceEditarComponente.editarFuente(fuente,this.route.snapshot.paramMap.get('id')!)
      .subscribe({
          next: (resp => {
            if (file==null) {
              this.router.navigateByUrl(`/paginas/componentes/fuentes/fuente/${this.route.snapshot.paramMap.get('id')}`)
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
            this.router.navigateByUrl(`/paginas/componentes/fuentes/fuente/${this.route.snapshot.paramMap.get('id')}`)
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
