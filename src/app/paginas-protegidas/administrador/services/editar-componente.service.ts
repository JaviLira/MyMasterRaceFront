import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo, Discos, Fuentes, Grafica, Procesador, RAM } from '../../interfaces/listaPedidos.interfce';


@Injectable({
  providedIn: 'root'
})
export class EditarComponenteService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  editarDisco(articulo:Discos,id:string):Observable<Discos>{
    const url = `${this.baseUrl}/articulo/disco/${id}`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.put<Discos>(url,articulo,{headers:header});
  }

  subirImagen(file:FormData,id:String){
    const url = `${this.baseUrl}/articulo/${id}/file`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.post<Discos>(url,file,{headers:header});
  }

  obtenerFoto(articulo:Articulo){
    const base64String = btoa(String.fromCharCode(...new Uint8Array(articulo.imagenes)))
    const source = `data:image/png;base64,${base64String}`+articulo.imagenes;
    return source;
  }

  editarRam(articulo:RAM,id:string):Observable<RAM>{
    const url = `${this.baseUrl}/articulo/ram/${id}`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.put<RAM>(url,articulo,{headers:header});
  }

  editarProcesador(articulo:Procesador,id:string):Observable<Procesador>{
    const url = `${this.baseUrl}/articulo/procesador/${id}`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.put<Procesador>(url,articulo,{headers:header});
  }

  editarGrafica(articulo:Grafica,id:string):Observable<Grafica>{
    const url = `${this.baseUrl}/articulo/grafica/${id}`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.put<Grafica>(url,articulo,{headers:header});
  }

  editarFuente(articulo:Fuentes,id:string):Observable<Fuentes>{
    const url = `${this.baseUrl}/articulo/fuente/${id}`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.put<Fuentes>(url,articulo,{headers:header});
  }

}
