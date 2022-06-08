import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/interfaces';
import { usuario } from '../interfaces/usuario';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { Usuario } from '../../paginas-protegidas/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ValidatorNameService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const username = control.value;
    return this.compruebaUsername(username).pipe(
      map (resp => {
        if(resp.name != null){
          return {laVerdad: true};
        }else{
          return null;
         }
      }),
      catchError (err => {
        return of(null);
      })
    )
  }

  /**
   * Método para comprobar username en BBDD
   * @param username
   * @returns
   */
  compruebaUsername(username: string) {
    const url = `${this.baseUrl}/auth/email?username=${username}`;
    return this.http.get<usuario>(url);
  }
}
