import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentesService } from '../../services/componentes.service';
import Swal from 'sweetalert2';
import { Discos } from '../../interfaces/componetes.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from '../../../interfaces/comentario.interface';
import { barraService } from '../../../../shared/services/barra.service';



@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css']
})
export class DiscoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private componentesService:ComponentesService, private router: Router,private authService: AuthService, private fb: FormBuilder, private barraService:barraService) { }

  ngOnInit(): void {
    this.buscarArticulo();
    this.validar();
    this.sacarComentarios();
  }

  miFormulario: FormGroup = this.fb.group({
    opinion:    ['', [ Validators.required, Validators.minLength(4) ]],
  });

  idDisco:string=this.route.snapshot.paramMap.get('id')!;
  espera:boolean=false;
  validarToken:boolean=false;
  articulo!:Discos;
  anadirComentario:boolean=false;
  listaComentarios!:Comentario[];

  buscarArticulo() {
    this.componentesService.sacarDisco(this.route.snapshot.paramMap.get('id')!)
    .subscribe({
       next: (resp => {
         this.articulo=resp;
         this.espera=true;
      }),
       error: resp => {
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

  get rolAdministrador(){
    return this.barraService.rolAdministrador;
  }

  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }
}
