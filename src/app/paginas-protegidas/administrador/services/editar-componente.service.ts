import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from 'src/app/paginas/componentes/interfaces/carrito.interface';
import { environment } from 'src/environments/environment';
import { Discos, Fuentes, Grafica, Procesador, RAM } from '../../interfaces/listaPedidos.interfce';


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



}
