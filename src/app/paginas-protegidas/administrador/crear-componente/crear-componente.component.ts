import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrearComponenteService } from '../services/crear-componente.service';
import Swal from 'sweetalert2';
import { Discos, Fuentes, Grafica, Procesador, RAM } from '../../interfaces/listaPedidos.interfce';
import { Router } from '@angular/router';
import { Ordenadores } from 'src/app/paginas/interfaces/ordenadores.interface';


@Component({
  selector: 'app-crear-componente',
  templateUrl: './crear-componente.component.html',
  styleUrls: ['./crear-componente.component.css']
})
export class CrearComponenteComponent implements OnInit {

  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private serviceCrearArticulo:CrearComponenteService,private router: Router) { }

  ngOnInit(): void {
    this.cargarArticulos();
  }

  /**
   * datos para todos los articulos
  */
  nombre!:string;
  imagen:any;
  imagenes:any;
  descripcion!:string;
  cantidad!:number;
  precio!:number;

  /**
   * por si hace un ordenador
   */

  listaRam!:RAM[];
  listaProcesadores!:Procesador[];
  listaDiscos!:Discos[];
  listaGraficas!:Grafica[];
  listaFuentes!:Fuentes[];

  /**
   * datos ram
   */

   tipoRam!:string;
   formatoRam!:string;
   capacidadRam!:number;
   kitRam!:string;
   esRam:boolean=false;

   /**
    * datos disco duro
    */

  tipoDisco!:string;
  capacidadDisco!:number;
  conexionDisco!:string;
  esDisco:boolean=false;

  /**
   * datos Procesador
   */

  marcaProcesador!:string;
  modeloProcesador!:string;
  socketProcesador!:string;
  esProcesador:boolean=false;

  /**
  * datos Grafica
  */

  marcaGrafica!:string;
  modeloGrafica!:string;
  esGrafica:boolean=false;

  /**
   * datos Fuente
   */

  certificacionFuente!:string;
  potenciaFuente!:number;
  esFuente:boolean=false;

  /**
   * datos ordenador
   */


  ramOrdenador!:RAM;
  procesadorOrdenador!:Procesador;
  discoOrdenador!:Discos;
  graficaOrdenador!:Grafica;
  fuenteOrdenador!:Fuentes;
  esOrdenador:boolean=false;

  elegirArticulo(articulo:string){
    this.esOrdenador=false
    this.esDisco=false;
    this.esFuente=false;
    this.esGrafica=false;
    this.esProcesador=false;
    this.esRam=false;

    if (articulo=="ram") {
      this.esRam=true;
    }else if (articulo=="disco") {
      this.esDisco=true;
    }else if (articulo=="fuente") {
      this.esFuente=true;
    }else if (articulo=="procesador") {
      this.esProcesador=true;
    }else if (articulo=="grafica") {
      this.esGrafica=true;
    }else if (articulo=="ordenador") {
      this.esOrdenador=true;
    }
  }

  enviar(){

    if (this.esDisco) {
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

      this.crearArticuloDisco(disco);

    }else if (this.esFuente) {
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
      this.crearArticuloFuente(fuente);

    }else if (this.esProcesador) {
      const procesador:Procesador =  {
        "id":0,
        "cantidad":this.cantidad,
        "descripcion": this.descripcion,
        "imagenes": this.imagen,
        "nombre": this.nombre,
        "precio": this.precio,
        "marca":this.marcaProcesador,
        "modelo":this.modeloProcesador,
        "socket":this.socketProcesador
      };
      this.crearArticuloProcesador(procesador);

    }else if (this.esGrafica) {
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
      this.crearArticuloGrafica(grafica);

    }else if (this.esRam) {
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
      this.crearArticuloRam(ram);
    }else if (this.esOrdenador) {
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
      this.crearArticuloOrdenador(ordenador);
    }



  }


 crearArticuloRam(ram:RAM){

  const file=this.imagenes;
  const formData = new FormData();
  formData.append('file', this.myForm.get('fileSource')!.value);

    this.serviceCrearArticulo.crearRam(ram)
    .subscribe({
        next: (resp => {
          if (file!=null) {
            this.anadirImagen(formData,resp.id);
          }else{
            Swal.fire('Articulo creado');
          }
      }),
        error: resp => {
          Swal.fire('No es posible crear el articulo',resp.error.mensaje)
        }
    });

  }

  crearArticuloProcesador(procesador:Procesador){

    const file=this.imagenes;
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')!.value);

    this.serviceCrearArticulo.crearProcesador(procesador)
    .subscribe({
        next: (resp => {
          if (file!=null) {
            this.anadirImagen(formData,resp.id);
          }else{
            Swal.fire('Articulo creado');
          }
      }),
        error: resp => {
          Swal.fire('No es posible crear el articulo',resp.error.mensaje)
        }
    });
    }

    crearArticuloFuente(fuente:Fuentes){

      const file=this.imagenes;
      const formData = new FormData();
      formData.append('file', this.myForm.get('fileSource')!.value);

      this.serviceCrearArticulo.crearFuente(fuente)
      .subscribe({
          next: (resp => {
            if (file!=null) {
              this.anadirImagen(formData,resp.id);
            }else{
              Swal.fire('Articulo creado');
            }
        }),
          error: resp => {
            Swal.fire('No es posible crear el articulo',resp.error.mensaje)
          }
      });
    }

    crearArticuloGrafica(grafica:Grafica){

      const file=this.imagenes;
      const formData = new FormData();
      formData.append('file', this.myForm.get('fileSource')!.value);

      this.serviceCrearArticulo.crearGrafica(grafica)
      .subscribe({
          next: (resp => {
            if (file!=null) {
              this.anadirImagen(formData,resp.id);
            }else{
              Swal.fire('Articulo creado');
            }
        }),
          error: resp => {
            Swal.fire('No es posible crear el articulo',resp.error.mensaje)
          }
      });
    }

    crearArticuloDisco(disco:Discos){

      const file=this.imagenes;
      const formData = new FormData();
      formData.append('file', this.myForm.get('fileSource')!.value);

      this.serviceCrearArticulo.crearDisco(disco)
      .subscribe({
          next: (resp => {
            if (file!=null) {
              this.anadirImagen(formData,resp.id);
            }else{
              Swal.fire('Articulo creado');
            }
        }),
          error: resp => {
            console.log(resp)
            Swal.fire('No es posible crear el articulo',resp.error.mensaje)
          }
      });
    }

    crearArticuloOrdenador(ordenador:Ordenadores){

      const file=this.imagenes;
      const formData = new FormData();
      formData.append('file', this.myForm.get('fileSource')!.value);

        this.serviceCrearArticulo.crearOrdenador(ordenador)
        .subscribe({
            next: (resp => {
              if (file!=null) {
                this.anadirImagen(formData,resp.id);
              }else{
                Swal.fire('Articulo creado');
              }
          }),
            error: resp => {
              Swal.fire('No es posible crear el articulo',resp.error.mensaje)
            }
        });

      }

    onFileChange(event:any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.myForm.patchValue({
          fileSource: file
        });
      }
    }

    anadirImagen(formData:FormData,idArticulo:number){


      this.serviceCrearArticulo.subirImagen(formData,idArticulo)
      .subscribe({
        next: (resp => {
          Swal.fire('Articulos creado');
      }),
        error: resp => {
          console.log(resp);
          Swal.fire('No es posible subir la imagen',resp.error.mensaje)
        }
      });
    }

    cargarArticulos(){

    }

}
