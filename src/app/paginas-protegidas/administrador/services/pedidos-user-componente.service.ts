import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Discos, Fuentes, Grafica, Procesador, RAM } from '../../interfaces/listaPedidos.interfce';
import { Pedido } from '../../interfaces/pedido.interface';
import { Usuario } from '../../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class PedidosUsuarioService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  sacarPedidosUsuario(idUsuario:string):Observable<Pedido>{
    const url = `${ this.baseUrl }/usuarios`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Pedido>( url, {headers})
  }



}
