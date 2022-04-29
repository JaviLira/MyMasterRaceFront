import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../../paginas-protegidas/interfaces/pedido.interface';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  /**
   * metodo para sacar los datos del usuario
   * como en el token esta el email del usuario envia solo el token y con eso la api
   * se las apaña para buscar al usuario
   * @returns
   */

  buscarUsuario(){
    const url = `${this.baseUrl}/usuario`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Usuario>(url,{headers});
  }

  /**
   * metodo para sacar todos los pedidos del usuario
   * @returns
   */

  buscarPedidos(){
    const url = `${this.baseUrl}/pedido`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Pedido[]>(url,{headers});
  }

  /**
   * metodo para borrar el pedido que que le envies por id
   * @param id
   * @returns
   */

  borrarPedido(id:string){
    const url = `${this.baseUrl}/pedido/${id}`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.delete<Pedido>(url,{headers});
  }

  modificarUsuario(usuario:Usuario){
    console.log(usuario);
    const url = `${this.baseUrl}/usuario`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.put<Usuario>(url,usuario,{headers});
  }


}
