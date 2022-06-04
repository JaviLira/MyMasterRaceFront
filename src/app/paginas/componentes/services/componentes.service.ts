import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticuloNoUsarPorAhora } from '../interfaces/articulo.interface';
import { Grafica, Procesador, Discos, Fuentes, RAM } from '../interfaces/componetes.interface';
import Swal from 'sweetalert2';
import { Comentario } from '../../interfaces/comentario.interface';
import { Articulo } from 'src/app/paginas-protegidas/interfaces/listaPedidos.interfce';


@Injectable({
  providedIn: 'root'
})

export class ComponentesService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  sacarGraficas():Observable<Grafica[]>{
    const url = `${this.baseUrl}/articulo/grafica`;
    const header = new HttpHeaders();
    return this.http.get<Grafica[]>(url,{headers:header});
  }

  sacarProcesadores():Observable<Procesador[]>{
    const url = `${this.baseUrl}/articulo/procesador`;
    const header = new HttpHeaders();
    return this.http.get<Procesador[]>(url,{headers:header});
  }

  sacarDiscos():Observable<Discos[]>{
    const url = `${this.baseUrl}/articulo/disco`;
    const header = new HttpHeaders();
    return this.http.get<Discos[]>(url,{headers:header});
  }

  sacarRams():Observable<RAM[]>{
    const url = `${this.baseUrl}/articulo/ram`;
    const header = new HttpHeaders();
    return this.http.get<RAM[]>(url,{headers:header});
  }

  sacarFuentes():Observable<Fuentes[]>{
    const url = `${this.baseUrl}/articulo/fuente`;
    const header = new HttpHeaders();
    return this.http.get<Fuentes[]>(url,{headers:header});
  }

  sacarDisco(id:string):Observable<Discos>{
    const url = `${this.baseUrl}/articulo/disco/${id}`;
    const header = new HttpHeaders();
    return this.http.get<Discos>(url,{headers:header});
  }

  sacarProcesador(id:string):Observable<Procesador>{
    const url = `${this.baseUrl}/articulo/procesador/${id}`;
    const header = new HttpHeaders();
    return this.http.get<Procesador>(url,{headers:header});
  }

  sacarRam(id:string):Observable<RAM>{
    const url = `${this.baseUrl}/articulo/ram/${id}`;
    const header = new HttpHeaders();
    return this.http.get<RAM>(url,{headers:header});
  }

  sacarGrafica(id:string):Observable<Grafica>{
    const url = `${this.baseUrl}/articulo/grafica/${id}`;
    const header = new HttpHeaders();
    return this.http.get<Grafica>(url,{headers:header});
  }

  sacarFuente(id:string):Observable<Fuentes>{
    const url = `${this.baseUrl}/articulo/fuente/${id}`;
    const header = new HttpHeaders();
    return this.http.get<Fuentes>(url,{headers:header});
  }

  enviarCarrito(articulo:ArticuloNoUsarPorAhora){
    const url = `${this.baseUrl}/carrito`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.post<ArticuloNoUsarPorAhora>(url,articulo,{headers:header});
  }

  hacerComentario(idArticulo:string,comentario:string){

    const url = `${this.baseUrl}/articulo/${idArticulo}/comentario`;
    const body =  {
      "comentario": comentario,
      "valoracion":5};
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.post<Comentario>(url,body,{headers:header});

  }

  sacarComentarios(idArticulo:string){
    const url = `${this.baseUrl}/articulo/${idArticulo}/comentario`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Comentario[]>(url,{headers:header});
    }

    obtenerFoto(articulo:Articulo){
      const base64String = btoa(String.fromCharCode(...new Uint8Array(articulo.imagenes)))
      const source = `data:image/png;base64,${base64String}`+articulo.imagenes;
      return source;
    }

  activarArticulo(articulo:any,idArticulo:string){
    const url = `${this.baseUrl}/articulo/${idArticulo}`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    const params = new  HttpParams().set("estado",true)
    return this.http.put<Discos>(url,articulo,{headers:header,params});
  }

  desactivarticulo(articulo:any,idArticulo:string){
    const url = `${this.baseUrl}/articulo/${idArticulo}`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    const params = new  HttpParams().set("estado",false)
    return this.http.put<Discos>(url,articulo,{headers:header,params});
  }
}
