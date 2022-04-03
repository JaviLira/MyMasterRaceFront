import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ComponentesService } from '../componentes/services/componentes.service';
import { Procesador, RAM, Grafica } from '../../paginas-protegidas/interfaces/listaPedidos.interfce';
import { Fuentes, Discos } from '../componentes/interfaces/componetes.interface';

@Injectable({
  providedIn: 'root'
})
export class ComponentesOrdenadorService {
  private baseUrl: string = environment.baseUrl;
  listaProcesadores!:Procesador[];
  listaRAMs!:RAM[];
  listaGraficas!:Grafica[];
  listaFuentes!:Fuentes[];
  listaDiscos!:Discos[];
  constructor( private http: HttpClient, private componentesService:ComponentesService) { }



  /**
   * metodos para sacar cada componente segun la id que le envies
   * @param id
   * @returns
   */

  sacarProcesadoresCompatibles(id:number):Observable<Procesador[]>{
    const url = `${this.baseUrl}/articulo/ordenador/${id}/ProcesadoresCompatibles`;
    const header = new HttpHeaders();
    return this.http.get<Procesador[]>(url,{headers:header});
  }

  sacarRamsCompatibles(id:number):Observable<RAM[]>{
    const url = `${this.baseUrl}/articulo/ordenador/${id}/RAMsCompatibles`;
    const header = new HttpHeaders();
    return this.http.get<RAM[]>(url,{headers:header});
  }

  sacarDiscos():Observable<Discos[]>{
    const url = `${this.baseUrl}/articulo/disco`;
    const header = new HttpHeaders();
    return this.http.get<Discos[]>(url,{headers:header});
  }

  sacarGraficas():Observable<Grafica[]>{
    const url = `${this.baseUrl}/articulo/grafica`;
    const header = new HttpHeaders();
    return this.http.get<Grafica[]>(url,{headers:header});
  }

  sacarFuentes():Observable<Fuentes[]>{
    const url = `${this.baseUrl}/articulo/fuente`;
    const header = new HttpHeaders();
    return this.http.get<Fuentes[]>(url,{headers:header});
  }


}
