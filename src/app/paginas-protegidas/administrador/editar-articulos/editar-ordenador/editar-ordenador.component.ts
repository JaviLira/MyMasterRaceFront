import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditarComponenteService } from '../../services/editar-componente.service';
import Swal from 'sweetalert2';
import { Ordenadores } from 'src/app/paginas/interfaces/ordenadores.interface';
import { Discos, Fuentes, Grafica, Procesador, RAM } from '../../../interfaces/listaPedidos.interfce';
import { CrearComponenteService } from '../../services/crear-componente.service';


@Component({
  selector: 'app-editar-ordenador',
  templateUrl: './editar-ordenador.component.html',
  styleUrls: ['./editar-ordenador.component.css']
})
export class EditarOrdenadorComponent implements OnInit {

  constructor(private serviceEditarComponente:EditarComponenteService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private serviceCrearArticulo:CrearComponenteService) { }

  ngOnInit(): void {
    this.recuperarComponentes();
  }

  ordenadorBase!:Ordenadores;
  nombre:string="";
  imagen:any;
  imagenes:any;
  descripcion:string="";
  cantidad:number=0;
  precio:number=0;
  ramOrdenador!:RAM;
  procesadorOrdenador!:Procesador;
  discoOrdenador!:Discos;
  graficaOrdenador!:Grafica;
  fuenteOrdenador!:Fuentes;
  espera:boolean=false;

  /**
   * Listas
   */

   listaRam!:RAM[];
   listaProcesadores!:Procesador[];
   listaDiscos!:Discos[];
   listaGraficas!:Grafica[];
   listaFuentes!:Fuentes[];

   /**
    * formulario para la imagen
    */

  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  enviar(){

    const ordenador:Ordenadores =  {
      "id":0,
      "cantidad":this.cantidad,
      "descripcion": this.descripcion,
      "imagenes": this.imagen,
      "nombre": this.nombre,
      "precio": this.precio,
      "ram":this.ramOrdenador,
      "procesador":this.procesadorOrdenador,
      "discoduro":this.discoOrdenador,
      "grafica":this.graficaOrdenador,
      "fuente":this.fuenteOrdenador
    };
    const file=this.imagenes;
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')!.value);


      this.serviceEditarComponente.editarOrdenador(ordenador,this.route.snapshot.paramMap.get('id')!)
      .subscribe({
          next: (resp => {
            if (file==null) {
              this.router.navigateByUrl(`/paginas/ordenadores/detallesOrdenador/${this.route.snapshot.paramMap.get('id')}`)
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
            this.router.navigateByUrl(`/paginas/ordenadores/detallesOrdenador/${this.route.snapshot.paramMap.get('id')}`)
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

  recuperarComponentes(){
    this.serviceCrearArticulo.sacaOrdenador(this.route.snapshot.paramMap.get('id')!)
    .subscribe({
      next: (resp => {
      this.ordenadorBase=resp;
      this.discoOrdenador=resp.discoduro;
      this.ramOrdenador=resp.ram;
      this.procesadorOrdenador=resp.procesador;
      this.fuenteOrdenador=resp.fuente;
      this.graficaOrdenador=resp.grafica;
      this.cargarDisco();

    }),
    error: resp => {
      console.log(resp);
    }});
  }

  cargarDisco(){
    this.serviceCrearArticulo.sacarDiscos()
    .subscribe({
      next: (resp => {
        this.listaDiscos=resp;
        this.cargarRam();
    }),
    error: resp => {
      console.log(resp);
    }});
  }

  cargarRam(){
    this.serviceCrearArticulo.sacarRam()
    .subscribe({
      next: (resp => {
        this.listaRam=resp;
        this.cargarProcesador();
    }),
    error: resp => {
      console.log(resp);
    }});
  }

  cargarProcesador(){
    this.serviceCrearArticulo.sacarProcesador()
    .subscribe({
      next: (resp => {
        this.listaProcesadores=resp;
        this.cargarFuente();
    }),
    error: resp => {
      console.log(resp);
    }});
  }

  cargarFuente(){
    this.serviceCrearArticulo.sacarFuentes()
    .subscribe({
      next: (resp => {
        this.listaFuentes=resp;
        this.cargarGrafica();
    }),
    error: resp => {
      console.log(resp);
    }});
  }

  cargarGrafica(){
    this.serviceCrearArticulo.sacarGraficas()
    .subscribe({
      next: (resp => {
        this.listaGraficas=resp;
        this.espera=true;
    }),
    error: resp => {
      console.log(resp);
    }});
  }


}
