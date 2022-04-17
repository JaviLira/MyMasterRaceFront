import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenadorService } from '../../services/ordenador.service';
import Swal from 'sweetalert2';
import { ComponentesOrdenadorService } from '../../services/componentes.service';
import { Ordenadores } from '../../interfaces/ordenadores.interface';
import { Procesador, RAM, Grafica } from '../../../paginas-protegidas/interfaces/listaPedidos.interfce';
import { Discos, Fuentes } from '../../componentes/interfaces/componetes.interface';
import { ArticuloNoUsarPorAhora } from '../../componentes/interfaces/articulo.interface';

@Component({
  selector: 'app-detalles-ordenador',
  templateUrl: './detalles-ordenador.component.html',
  styleUrls: ['./detalles-ordenador.component.css']
})
export class DetallesOrdenadorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private serviceOrdenador:OrdenadorService, private servicioComponentes:ComponentesOrdenadorService,private router: Router) { }

  espera:boolean=false;
  ordenador!:Ordenadores;
  procesadores!:Procesador[];
  rams!:RAM[];
  discos!:Discos[];
  graficas!:Grafica[];
  fuentes!:Fuentes[];
  id:string="";

  ngOnInit(): void {
    this.buscarOrdenador();
  }

  /**
   * metodo que busca con la id que le emos pasado por la url un ordenador especifico
   */

  buscarOrdenador(){
    this.serviceOrdenador.sacarUnOrdenador(this.route.snapshot.paramMap.get('id')!).subscribe({
      next: (resp => {
        this.ordenador=resp;
        this.buscarProcesadores();
     }),
      error: resp => {
        console.log(resp);
        Swal.fire('No se han podido cargar los datos del servidor')
      }
   });
  }

  /**
   * metodo que le envia la id del procesador del ordenador actual a la api y devuelve los procesadores compatibres
   * metiendolos en una lista de procesadores
   */

  buscarProcesadores(){
    this.servicioComponentes.sacarProcesadoresCompatibles(this.ordenador.id).subscribe({
      next: (resp => {
        this.procesadores=resp;
        this.buscarRam();
     }),
      error: resp => {
        Swal.fire('No se han podido cargar los procesadores')
      }
   });
  }

    /**
   * metodo que le envia la id de la RAM del ordenador actual a la api y devuelve las RAMs compatibres
   * metiendolos en una lista de RAMs
   */

  buscarRam(){
    this.servicioComponentes.sacarRamsCompatibles(this.ordenador.id).subscribe({
      next: (resp => {
        this.rams=resp;
        this.buscarDiscos();
     }),
      error: resp => {
        Swal.fire('No se han podido cargar las RAM')
      }
   });
  }

    /**
   * metodo que le envia la id del disco del ordenador actual a la api y devuelve los discos de la base de datos
   * metiendolos en una lista de discos
   */

  buscarDiscos(){
    this.servicioComponentes.sacarDiscos().subscribe({
      next: (resp => {
        this.discos=resp;
        this.buscarGraficas();
     }),
      error: resp => {
        console.log(resp);
        Swal.fire('No se han podido cargar los discos')
      }
   });
  }

      /**
   * metodo que le envia la id de la grafica del ordenador actual a la api y devuelve las graficas de la base de datos
   * metiendolos en una lista de graficas
   */

  buscarGraficas(){
    this.servicioComponentes.sacarGraficas().subscribe({
      next: (resp => {
        this.graficas=resp;
        this.buscarFuentes();
     }),
      error: resp => {
        console.log(resp);
        Swal.fire('No se han podido cargar las graficas')
      }
   });
  }

      /**
   * metodo que le envia la id del fuentes del ordenador actual a la api y devuelve los fuentes de la base de datos
   * metiendolos en una lista de fuentes
   */

  buscarFuentes(){
    this.servicioComponentes.sacarFuentes().subscribe({
      next: (resp => {
        this.fuentes=resp;
        this.espera=true;
     }),
      error: resp => {
        Swal.fire('No se han podido cargar las fuentes')
      }
   });
  }

  /**
   * metodo que envia temporalmente el ordenador al servicio para guardarlo para enviarlo posterior mente
   * junto al pedido
   */

  enviarOrdenador(){
    this.serviceOrdenador.recibirOrdenador(this.ordenador);
  }

  crearOrdenador(){
    this.serviceOrdenador.crearUnOrdenadorUsuario(this.ordenador).subscribe({
      next: (resp => {
        this.anadirCarrito(resp);
     }),
      error: resp => {
        Swal.fire('Ordenador no disponible')
      }
   });
  }

  anadirCarrito(ordenador:ArticuloNoUsarPorAhora){
    this.serviceOrdenador.enviarCarrito(ordenador).subscribe({
      next: (resp => {
        Swal.fire('Perfecto', 'El articulo se a añadido a su carrito', 'success');
     }),
      error: resp => {
        Swal.fire('Ordenador no disponible')
      }
   });
  }

  comprar(){
    this.serviceOrdenador.crearUnOrdenadorUsuario(this.ordenador).subscribe({
      next: (resp => {
        this.serviceOrdenador.enviarCarrito(resp).subscribe({
          next: (resp => {
            this.router.navigateByUrl('/paginasProtegidas/carrito');
         }),
          error: resp => {
            Swal.fire('Ordenador no disponible')
          }
       });
     }),
      error: resp => {
        Swal.fire('Ordenador no disponible')
      }
   });
  }

  comprarEnviarCarrito(ordenador:ArticuloNoUsarPorAhora){
     this.serviceOrdenador.enviarCarrito(ordenador).subscribe({
          next: (resp => {
            this.router.navigateByUrl('/paginasProtegidas/carrito');
         }),
          error: resp => {
            Swal.fire('Ordenador no disponible')
          }
       });
  }

}
