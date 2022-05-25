import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { Procesador } from '../../interfaces/componetes.interface';
import { ComponentesService } from '../../services/componentes.service';
import { Comentario } from '../../../interfaces/comentario.interface';



@Component({
  selector: 'app-procesador',
  templateUrl: './procesador.component.html',
  styleUrls: ['./procesador.component.css']
})
export class ProcesadorComponent implements OnInit {

  constructor(private route: ActivatedRoute,private componentesService:ComponentesService,private router: Router,private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buscarArticulo();
    this.validar();
    this.sacarComentarios();
  }

  miFormulario: FormGroup = this.fb.group({
    opinion:    ['', [ Validators.required, Validators.minLength(4) ]],
  });

  espera:boolean=false;
  validarToken:boolean=false;
  articulo!:Procesador;
  anadirComentario:boolean=false;
  listaComentarios!:Comentario[];

  buscarArticulo() {
    this.componentesService.sacarProcesador(this.route.snapshot.paramMap.get('id')!)
    .subscribe({
       next: (resp => {
         this.articulo=resp;
         this.articulo.imagenGenerada=this.componentesService.obtenerFoto(this.articulo);
         this.espera=true;
      }),
       error: resp => {
         console.log(resp)
         Swal.fire('No se han podido cargar los datos del servidor')
       }
    });
  }

  comprar(){
    this.validar();
    if (this.validarToken) {
       this.componentesService.enviarCarrito(this.articulo)
    .subscribe({
      next: (resp => {
        this.router.navigateByUrl('/paginasProtegidas/carrito');
      }),
      error: resp => {
        Swal.fire('No se a podido enviar el articulo al carrito',resp.error.mensaje)
      }
    });
  }else{
    Swal.fire('Necesitas estar logeado')
  }

  }

  anadirCarrito(){
    this.validar();
    if (this.validarToken) {
      this.componentesService.enviarCarrito(this.articulo)
      .subscribe({
        next: (resp => {
          Swal.fire('Perfecto', 'El articulo se a añadido a su carrito', 'success');
        }),
        error: resp => {
          Swal.fire('No se a podido enviar el articulo al carrito',resp.error.mensaje)
        }
      });
    }else{
      Swal.fire('Necesitas estar logeado')
    }
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
