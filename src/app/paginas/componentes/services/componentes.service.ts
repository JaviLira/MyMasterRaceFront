import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticuloNoUsarPorAhora } from '../interfaces/articulo.interface';
import { Grafica, Procesador, Discos, Fuentes, RAM } from '../interfaces/componetes.interface';
import Swal from 'sweetalert2';


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

  hacerComentario(idArticulo:number,comentario:string){

    const url = `${this.baseUrl}/articulo/{id}/comentario`;
    const body =  {
      "email":idArticulo,
      "password": comentario};
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.post<ArticuloNoUsarPorAhora>(url,body,{headers:header});

    }

}
