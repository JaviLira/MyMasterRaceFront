import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EditarComponenteService } from '../../services/editar-componente.service';
import { RAM } from '../../../interfaces/listaPedidos.interfce';



@Component({
  selector: 'app-editar-ram',
  templateUrl: './editar-ram.component.html',
  styleUrls: ['./editar-ram.component.css']
})
export class EditarRamComponent implements OnInit {

  constructor(private serviceEditarComponente:EditarComponenteService, private route: ActivatedRoute, private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  nombre:string="";
  imagen:any;
  imagenes:any;
  descripcion:string="";
  cantidad:number=0;
  precio:number=0;
  tipoRam!:string;
  formatoRam!:string;
  capacidadRam!:number;
  kitRam!:string;
  esRam:boolean=false;

  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  enviar(){

    const ram:RAM =  {
      "id":0,
      "cantidad":this.cantidad,
      "capacidad": this.capacidadRam,
      "descripcion": this.descripcion,
      "formato": this.descripcion,
      "imagenes": this.imagen,
      "kit": this.kitRam,
      "nombre": this.nombre,
      "precio": this.precio,
      "tipo": this.tipoRam
    };
    const file=this.imagenes;
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')!.value);


      this.serviceEditarComponente.editarRam(ram,this.route.snapshot.paramMap.get('id')!)
      .subscribe({
          next: (resp => {
            if (file==null) {
              this.router.navigateByUrl(`/paginas/componentes/rams/ram/${this.route.snapshot.paramMap.get('id')}`)
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
            this.router.navigateByUrl(`/paginas/componentes/rams/ram/${this.route.snapshot.paramMap.get('id')}`)
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
