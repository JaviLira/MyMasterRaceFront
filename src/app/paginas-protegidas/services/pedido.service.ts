import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticuloNoUsarPorAhora } from 'src/app/paginas/componentes/interfaces/articulo.interface';
import { environment } from 'src/environments/environment';
import { Pedido } from '../../paginas-protegidas/interfaces/pedido.interface';
import { Ordenadores } from '../../paginas/interfaces/ordenadores.interface';
import { Articulo, LineaPedido } from '../interfaces/listaPedidos.interfce';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  buscarPedio(id:string){
    const url = `${this.baseUrl}/pedido/`+id;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Pedido>(url,{headers});
  }

  buscarLineasPedido(id:string){
    const url = `${this.baseUrl}/pedido/${id}/lineaPedido`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<LineaPedido[]>(url,{headers});
  }

  sacarPedidos(){
    const url = `${this.baseUrl}/pedido`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Pedido[]>(url,{headers});
  }

  obtenerFoto(articulo:Articulo){
    const base64String = btoa(String.fromCharCode(...new Uint8Array(articulo.imagenes)))
    const source = `data:image/png;base64,${base64String}`+articulo.imagenes;
    return source;
  }

}
