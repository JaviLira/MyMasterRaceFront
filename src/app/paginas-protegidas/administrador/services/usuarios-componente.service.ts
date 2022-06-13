import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class ListaUsuariosService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  sacarUsuarios():Observable<Usuario[]>{
    const url = `${ this.baseUrl }/usuarios`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Usuario[]>( url, {headers})
  }

  cambiarRol(usuario:Usuario,rol:string){
    const url = `${ this.baseUrl }/usuario/${usuario.email}?rol=${rol}`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.put<Usuario>( url, usuario,{headers})
  }



}
