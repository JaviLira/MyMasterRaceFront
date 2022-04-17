import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../interfaces/pedido.interface';
import { Ordenadores } from '../../paginas/interfaces/ordenadores.interface';
import { Observable } from 'rxjs';
import { Carrito } from '../../paginas/componentes/interfaces/carrito.interface';



@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  buscarArticulosDelCarrito():Observable<Carrito[]>{
    const url = `${this.baseUrl}/carrito`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.get<Carrito[]>(url,{headers:header});
  }

  borrarArticuloDelCarrito(id:number){
    const url = `${this.baseUrl}/carrito/${id}`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);;
    return this.http.delete<Carrito>(url,{headers:header});
  }


}
