import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from 'src/app/paginas/componentes/interfaces/carrito.interface';
import { Ordenadores } from 'src/app/paginas/interfaces/ordenadores.interface';
import { environment } from 'src/environments/environment';
import { Discos, Fuentes, Grafica, Procesador, RAM } from '../../interfaces/listaPedidos.interfce';


@Injectable({
  providedIn: 'root'
})
export class CrearComponenteService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  crearRam(articulo:RAM):Observable<RAM>{
    const url = `${this.baseUrl}/articulo/ram`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.post<RAM>(url,articulo,{headers:header});
  }

  crearProcesador(articulo:Procesador):Observable<Procesador>{
    const url = `${this.baseUrl}/articulo/procesador`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.post<Procesador>(url,articulo,{headers:header});
  }

  crearFuente(articulo:Fuentes):Observable<Fuentes>{
    const url = `${this.baseUrl}/articulo/fuente`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.post<Fuentes>(url,articulo,{headers:header});
  }

  crearGrafica(articulo:Grafica):Observable<Grafica>{
    const url = `${this.baseUrl}/articulo/grafica`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.post<Grafica>(url,articulo,{headers:header});
  }

  crearDisco(articulo:Discos):Observable<Discos>{
    const url = `${this.baseUrl}/articulo/disco`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.post<Discos>(url,articulo,{headers:header});
  }

  crearOrdenador(articulo:Ordenadores):Observable<Ordenadores>{
    const url = `${this.baseUrl}/articulo/ordenador`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.post<Ordenadores>(url,articulo,{headers:header});
  }

  subirImagen(file:FormData,id:number){
    const url = `${this.baseUrl}/articulo/${id}/file`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.post<Discos>(url,file,{headers:header});
  }

  sacaOrdenador(idOrdenador:string):Observable<Ordenadores>{
    const url = `${this.baseUrl}/articulo/ordenador/${idOrdenador}`;
    const header = new HttpHeaders();
    return this.http.get<Ordenadores>(url,{headers:header});
  }

  sacarDiscos():Observable<Discos[]>{
    const url = `${this.baseUrl}/articulo/disco`;
    const header = new HttpHeaders();
    return this.http.get<Discos[]>(url,{headers:header});
  }

  sacarGraficas():Observable<Grafica[]>{
    const url = `${this.baseUrl}/articulo/grafica`;
    const header = new HttpHeaders();
    return this.http.get<Grafica[]>(url,{headers:header});
  }

  sacarFuentes():Observable<Fuentes[]>{
    const url = `${this.baseUrl}/articulo/fuente`;
    const header = new HttpHeaders();
    return this.http.get<Fuentes[]>(url,{headers:header});
  }

  sacarProcesador():Observable<Procesador[]>{
    const url = `${this.baseUrl}/articulo/procesador`;
    const header = new HttpHeaders();
    return this.http.get<Procesador[]>(url,{headers:header});
  }

  sacarRam():Observable<RAM[]>{
    const url = `${this.baseUrl}/articulo/ram`;
    const header = new HttpHeaders();
    return this.http.get<RAM[]>(url,{headers:header});
  }

}
