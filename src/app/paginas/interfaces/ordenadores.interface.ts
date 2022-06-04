// To parse this data:
//
//   import { Convert } from "./file";
//
//   const ordenadores = Convert.toOrdenadores(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Ordenadores {
  id:          number;
  nombre:      string;
  imagenes:    string;
  imagenGenerada?:     any;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  ram:         RAM;
  procesador:  Procesador;
  discoduro:   Discoduro;
  grafica:     Grafica;
  fuente:      Fuentes;
  activo?:boolean;

}
export interface Discoduro {
  id:          number;
  nombre:      string;
  imagenes:    string;
  imagenGenerada?:     any;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  tipo:        string;
  capacidad:   number;
  conexion:    string;
  activo?:boolean;
}
export interface RAM {
  id:          number;
  nombre:      string;
  imagenes:    string;
  imagenGenerada?:     any;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  tipo:        string;
  formato:     string;
  capacidad:   number;
  kit:         string;
  activo?:boolean;
}



export interface Procesador {
  id:          number;
  nombre:      string;
  imagenes:    string;
  imagenGenerada?:     any;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  marca:       string;
  modelo:      string;
  socket:      string;
  activo?:boolean;
}
export interface Fuentes {
  id:            number;
  nombre:        string;
  imagenes:      string;
  imagenGenerada?:     any;
  descripcion:   string;
  cantidad:      number;
  precio:        number;
  certificacion: string;
  potencia:      number;
  activo?:boolean;
}

export interface Discos {
  id:          number;
  nombre:      string;
  imagenes:    string;
  imagenGenerada?:     any;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  tipo:        string;
  capacidad:   number;
  conexion:    string;
  activo?:boolean;
}

export interface Grafica {
  id:          number;
  nombre:      string;
  imagenes:    string;
  imagenGenerada?:     any;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  marca:       string;
  modelo:      string;
  activo?:boolean;
}
