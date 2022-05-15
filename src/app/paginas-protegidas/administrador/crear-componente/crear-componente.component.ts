import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrearComponenteService } from '../services/crear-componente.service';
import Swal from 'sweetalert2';
import { Discos, Fuentes, Grafica, Procesador, RAM } from '../../interfaces/listaPedidos.interfce';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-componente',
  templateUrl: './crear-componente.component.html',
  styleUrls: ['./crear-componente.component.css']
})
export class CrearComponenteComponent implements OnInit {

  constructor(private serviceCrearArticulo:CrearComponenteService,private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * datos para todos los articulos
  */
  nombre!:string;
  imagenes!:string;
  descripcion!:string;
  cantidad!:number;
  precio!:number;

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

  elegirArticulo(articulo:string){

    if (articulo=="ram") {
      this.esDisco=false;
      this.esFuente=false;
      this.esGrafica=false;
      this.esProcesador=false;
      this.esRam=true;
    }
    if (articulo=="disco") {
      this.esDisco=true;
      this.esFuente=false;
      this.esGrafica=false;
      this.esProcesador=false;
      this.esRam=false;
    }
    if (articulo=="fuente") {
      this.esDisco=false;
      this.esFuente=true;
      this.esGrafica=false;
      this.esProcesador=false;
      this.esRam=false;
    }
    if (articulo=="procesador") {
      this.esDisco=false;
      this.esFuente=false;
      this.esGrafica=false;
      this.esProcesador=true;
      this.esRam=false;
    }
    if (articulo=="grafica") {
      this.esDisco=false;
      this.esFuente=false;
      this.esGrafica=true;
      this.esProcesador=false;
      this.esRam=false;
    }
  }

  enviar(){

    if (this.esDisco) {
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

      this.crearArticuloDisco(disco);

    }else if (this.esFuente) {
      const fuente:Fuentes =  {
        "id":0,
        "cantidad":this.cantidad,
        "descripcion": this.descripcion,
        "imagenes": this.imagenes,
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
        "imagenes": this.imagenes,
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
        "imagenes": this.imagenes,
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
        "imagenes": this.imagenes,
        "kit": this.kitRam,
        "nombre": this.nombre,
        "precio": this.precio,
        "tipo": this.tipoRam
      };
      this.crearArticuloRam(ram);
    }
  }


 crearArticuloRam(ram:RAM){
    this.serviceCrearArticulo.crearRam(ram)
    .subscribe({
        next: (resp => {
          Swal.fire('Articulo creado');
      }),
        error: resp => {
          Swal.fire('No es posible crear el articulo',resp.error.mensaje)
        }
    });
  }

  crearArticuloProcesador(procesador:Procesador){
    this.serviceCrearArticulo.crearProcesador(procesador)
    .subscribe({
        next: (resp => {
          Swal.fire('Articulo creado');
      }),
        error: resp => {
          Swal.fire('No es posible crear el articulo',resp.error.mensaje)
        }
    });
    }

    crearArticuloFuente(fuente:Fuentes){
      this.serviceCrearArticulo.crearFuente(fuente)
      .subscribe({
          next: (resp => {
            Swal.fire('Articulo creado');
        }),
          error: resp => {
            Swal.fire('No es posible crear el articulo',resp.error.mensaje)
          }
      });
    }

    crearArticuloGrafica(grafica:Grafica){
      this.serviceCrearArticulo.crearGrafica(grafica)
      .subscribe({
          next: (resp => {
            Swal.fire('Articulo creado');
        }),
          error: resp => {
            Swal.fire('No es posible crear el articulo',resp.error.mensaje)
          }
      });
    }

    crearArticuloDisco(disco:Discos){
      this.serviceCrearArticulo.crearDisco(disco)
      .subscribe({
          next: (resp => {
            Swal.fire('Articulo creado');
        }),
          error: resp => {
            Swal.fire('No es posible crear el articulo',resp.error.mensaje)
          }
      });
    }

}
