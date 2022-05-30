import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EditarComponenteService } from '../../services/editar-componente.service';
import { Grafica, Procesador } from '../../../interfaces/listaPedidos.interfce';



@Component({
  selector: 'app-editar-grafica',
  templateUrl: './editar-grafica.component.html',
  styleUrls: ['./editar-grafica.component.css']
})
export class EditarGraficaComponent implements OnInit {

  constructor(private serviceEditarComponente:EditarComponenteService, private route: ActivatedRoute, private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  nombre:string="";
  imagen:any;
  imagenes:any;
  descripcion:string="";
  cantidad:number=0;
  precio:number=0;
  marcaGrafica!:string;
  modeloGrafica!:string;


  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  enviar(){

    const grafica:Grafica =  {
      "id":0,
      "cantidad":this.cantidad,
      "descripcion": this.descripcion,
      "imagenes": this.imagen,
      "nombre": this.nombre,
      "precio": this.precio,
      "marca":this.marcaGrafica,
      "modelo":this.modeloGrafica
    };
    const file=this.imagenes;
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')!.value);


      this.serviceEditarComponente.editarGrafica(grafica,this.route.snapshot.paramMap.get('id')!)
      .subscribe({
          next: (resp => {
            if (file==null) {
              this.router.navigateByUrl(`/paginas/componentes/graficas/grafica/${this.route.snapshot.paramMap.get('id')}`)
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
            this.router.navigateByUrl(`/paginas/componentes/graficas/grafica/${this.route.snapshot.paramMap.get('id')}`)
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
