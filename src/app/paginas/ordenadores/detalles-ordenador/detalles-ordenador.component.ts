import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenadorService } from '../../services/ordenador.service';
import Swal from 'sweetalert2';
import { ComponentesOrdenadorService } from '../../services/componentes.service';
import { Ordenadores } from '../../interfaces/ordenadores.interface';
import { Procesador, RAM, Grafica } from '../../../paginas-protegidas/interfaces/listaPedidos.interfce';
import { Discos, Fuentes } from '../../componentes/interfaces/componetes.interface';
import { ArticuloNoUsarPorAhora } from '../../componentes/interfaces/articulo.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from '../../interfaces/comentario.interface';
import { ComponentesService } from '../../componentes/services/componentes.service';



@Component({
  selector: 'app-detalles-ordenador',
  templateUrl: './detalles-ordenador.component.html',
  styleUrls: ['./detalles-ordenador.component.css']
})
export class DetallesOrdenadorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private serviceOrdenador:OrdenadorService, private servicioComponentes:ComponentesOrdenadorService,private router: Router,private authService: AuthService, private fb: FormBuilder,private componentesService:ComponentesService) { }

  espera:boolean=false;
  ordenador!:Ordenadores;
  ordenador2!:Ordenadores;
  procesadores!:Procesador[];
  rams!:RAM[];
  discos!:Discos[];
  graficas!:Grafica[];
  fuentes!:Fuentes[];
  precioModificado:number=0;
  id:string="";
  validarToken:boolean=false;
  anadirComentario:boolean=false;
  listaComentarios!:Comentario[];


  ngOnInit(): void {
    this.buscarOrdenador();
    this.validar();
    this.sacarComentarios();
  }

  miFormulario: FormGroup = this.fb.group({
    opinion:    ['', [ Validators.required, Validators.minLength(4) ]],
  });

  /**
   * metodo que busca con la id que le emos pasado por la url un ordenador especifico
   */

  buscarOrdenador(){
    this.serviceOrdenador.sacarUnOrdenador(this.route.snapshot.paramMap.get('id')!).subscribe({
      next: (resp => {
        this.ordenador=resp;
        this.ordenador2=resp;
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
        this.calcularPrecioModificado();
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

  /*enviarOrdenador(){
    this.serviceOrdenador.recibirOrdenador(this.ordenador);
  }*/

  crearOrdenador(){
    this.validar();
    if (this.validarToken) {
    this.serviceOrdenador.crearUnOrdenadorUsuario(this.ordenador).subscribe({
      next: (resp => {
        this.anadirCarrito(resp);
     }),
      error: resp => {
        Swal.fire('Ordenador no disponible')
      }
   });
  }else{
    Swal.fire('Necesitas estar logeado')
  }
  }



  anadirCarrito(ordenador:ArticuloNoUsarPorAhora){
    this.serviceOrdenador.enviarCarrito(ordenador).subscribe({
      next: (resp => {
        Swal.fire('Perfecto', 'El articulo se a añadido a su carrito', 'success');
     }),
      error: resp => {
        Swal.fire('Ordenador no disponible',resp.error.mensaje)
      }
   });
  }

  comprar(){
    this.validar();
    if (this.validarToken) {
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
          Swal.fire('No se a podido enviar el articulo al carrito',resp.error.mensaje)
        }
    });
    }else{
      Swal.fire('Necesitas estar logeado')
    }


  }

  comprarEnviarCarrito(ordenador:ArticuloNoUsarPorAhora){

      this.serviceOrdenador.enviarCarrito(ordenador).subscribe({
            next: (resp => {
              this.router.navigateByUrl('/paginasProtegidas/carrito');
          }),
            error: resp => {
              Swal.fire('Ordenador no disponible',resp.error.mensaje)
            }
        });


  }

  validar(){
    this.authService.validarToken()
    .subscribe({
       next: (resp => {
        this.validarToken=true;
         return true;
      }),
       error: resp => {
        this.validarToken=false;
        return false;
       }
    });
  }

  calcularPrecioModificado(){
    this.precioModificado=0;
    this.serviceOrdenador.sacarUnArticulo(this.ordenador2.ram.id)
    .subscribe({
       next: (resp => {
        this.precioModificado+=resp.precio;
      })
    });

    this.serviceOrdenador.sacarUnArticulo(this.ordenador2.procesador.id)
    .subscribe({
       next: (resp => {
        this.precioModificado+=resp.precio;
      })
    });

    this.serviceOrdenador.sacarUnArticulo(this.ordenador2.discoduro.id)
    .subscribe({
       next: (resp => {
        this.precioModificado+=resp.precio;
      })
    });

    this.serviceOrdenador.sacarUnArticulo(this.ordenador2.fuente.id)
    .subscribe({
       next: (resp => {
        this.precioModificado+=resp.precio;
      })
    });

    this.serviceOrdenador.sacarUnArticulo(this.ordenador2.grafica.id)
    .subscribe({
       next: (resp => {
        this.precioModificado+=resp.precio;
      })
    });
  this.precioModificado+=this.ordenador2.precio;

  }

  anadirUncomentario(){
    this.sacarComentarios();
    if (this.anadirComentario==true) {
      this.anadirComentario=false;
    }else{
      this.anadirComentario=true;
    }

  }

  hacerComentario(){
    this.componentesService.hacerComentario(this.route.snapshot.paramMap.get('id')!,this.miFormulario.value.opinion)
    .subscribe({
       next: (resp => {
        this.sacarComentarios();
        this.anadirComentario=false;
      }),
       error: resp => {
         Swal.fire('No se han podido enviar el comentario',resp.error.mensaje,'error')
       }
    });
  }

  sacarComentarios(){
    this.componentesService.sacarComentarios(this.route.snapshot.paramMap.get('id')!)
    .subscribe({
       next: (resp => {
        this.listaComentarios=resp;
      }),
       error: resp => {

      }
    });
  }

  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }
}
