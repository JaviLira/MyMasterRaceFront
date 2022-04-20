import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, of } from 'rxjs';
import { Usuario } from '../../paginas-protegidas/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class barraService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  sesionIniciada:boolean=false;
  usuario!:Usuario;

  /**
   * metodo para validar tocken
   * envia el tocken que tiene en el localStorage y si es valido no recive ningun error
   * @returns
   */

  sacarUsuario():Observable<Usuario>{
    const url = `${ this.baseUrl }/usuario`;
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Usuario>( url, {headers})
  }

  sacarSacarUsuario(){
    this.sacarUsuario()
    .subscribe({
       next: (resp => {
        this.usuario=resp;
        this.sesionIniciada=true;
      }),
       error: resp => {

       }
    });
  }



}
