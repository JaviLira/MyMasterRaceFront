import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo, Discos, Fuentes, Grafica, LineaPedido, Procesador, RAM } from '../../interfaces/listaPedidos.interfce';
import { Pedido } from '../../interfaces/pedido.interface';
import { Usuario } from '../../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class PedidosUsuarioService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  sacarPedidosUsuario(idUsuario:string):Observable<Pedido[]>{
    const url = `${ this.baseUrl }/usuario/${idUsuario}/pedido`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Pedido[]>( url, {headers})
  }

  modificarPedido(idUsuario:string,pedido:Pedido){
    const url = `${ this.baseUrl }/usuario/${idUsuario}/pedido/${pedido.id}`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.put<Pedido[]>( url,pedido,{headers})
  }

  buscarLineasPedido(id:string){
    const url = `${this.baseUrl}/pedido/${id}/lineaPedido`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<LineaPedido[]>(url,{headers});
  }

  obtenerFoto(articulo:Articulo){
    const base64String = btoa(String.fromCharCode(...new Uint8Array(articulo.imagenes)))
    const source = `data:image/png;base64,${base64String}`+articulo.imagenes;
    return source;
  }



}
