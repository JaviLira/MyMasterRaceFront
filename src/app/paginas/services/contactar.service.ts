import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ComponentesService } from '../componentes/services/componentes.service';
import { Mensaje } from '../interfaces/mensaje.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ContactarService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient, private componentesService:ComponentesService) { }
  jwt:JwtHelperService=new JwtHelperService();


  /**
   * metodos para sacar cada componente segun la id que le envies
   * @param id
   * @returns
   */

  enviarMensaje(mensaje:Mensaje):Observable<Mensaje>{
    const url = `${this.baseUrl}/mail`;
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.post<Mensaje>(url,mensaje,{headers:header});
  }

  findEmailUser():string{
    let token = localStorage.getItem("token")!;
    return this.jwt.decodeToken(token).email;
  }



}
