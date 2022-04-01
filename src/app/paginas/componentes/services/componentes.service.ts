import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Grafica, Procesador, Discos, Fuentes, RAM } from '../interfaces/componetes.interface';

@Injectable({
  providedIn: 'root'
})

export class ComponentesService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  sacarGraficas():Observable<Grafica[]>{
    const url = `${this.baseUrl}/articulo/grafica`;
    const header = new HttpHeaders();
    return this.http.get<Grafica[]>(url,{headers:header});
  }

  sacarProcesadores():Observable<Procesador[]>{
    const url = `${this.baseUrl}/articulo/procesador`;
    const header = new HttpHeaders();
    return this.http.get<Procesador[]>(url,{headers:header});
  }

  sacarDiscos():Observable<Discos[]>{
    const url = `${this.baseUrl}/articulo/disco`;
    const header = new HttpHeaders();
    return this.http.get<Discos[]>(url,{headers:header});
  }

  sacarRams():Observable<RAM[]>{
    const url = `${this.baseUrl}/articulo/ram`;
    const header = new HttpHeaders();
    return this.http.get<RAM[]>(url,{headers:header});
  }

  sacarFuentes():Observable<Fuentes[]>{
    const url = `${this.baseUrl}/articulo/fuente`;
    const header = new HttpHeaders();
    return this.http.get<Fuentes[]>(url,{headers:header});
  }

}
