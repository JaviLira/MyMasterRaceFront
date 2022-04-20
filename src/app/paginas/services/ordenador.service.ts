import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticuloNoUsarPorAhora } from '../componentes/interfaces/articulo.interface';
import { Ordenadores } from '../interfaces/ordenadores.interface';

@Injectable({
  providedIn: 'root'
})

export class OrdenadorService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }
  ordenadorCaja!:Ordenadores;

  /**
   * Saca la lista de ordenadores de la API
   * @returns
   */

  sacarOrdenadores():Observable<Ordenadores[]>{
    const url = `${this.baseUrl}/articulo/ordenador`;
    const header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin","*")
    return this.http.get<Ordenadores[]>(url,{headers:header});
  }

  /**
   * saca el ordenador que le pidas de la API
   * @param id
   * @returns
   */

  sacarUnOrdenador(id:string):Observable<Ordenadores>{
    const url = `${this.baseUrl}/articulo/ordenador/${id}`;
    const header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin","*")
    return this.http.get<Ordenadores>(url,{headers:header});
  }

  /**
   * guarda en una variable el ordenador que a configurado el usuario
   * @param ordenador
   */

  recibirOrdenador(ordenador:Ordenadores){
    this.ordenadorCaja=ordenador;
  }

  crearUnOrdenadorUsuario(ordenador:Ordenadores):Observable<Ordenadores>{
    const url = `${this.baseUrl}/articulo/ordenadorVendido`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.post<Ordenadores>(url,ordenador,{headers:header});
  }

  enviarCarrito(articulo:ArticuloNoUsarPorAhora){
    const url = `${this.baseUrl}/carrito`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.post<ArticuloNoUsarPorAhora>(url,articulo,{headers:header});
  }

  sacarUnArticulo(id:number):Observable<ArticuloNoUsarPorAhora>{
    const url = `${this.baseUrl}/articulo/${id}`;
    const header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin","*")
    return this.http.get<ArticuloNoUsarPorAhora>(url,{headers:header});
  }

}
