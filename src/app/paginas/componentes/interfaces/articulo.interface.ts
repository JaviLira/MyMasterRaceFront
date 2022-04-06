// To parse this data:
//
//   import { Convert } from "./file";
//
//   const articulo = Convert.toArticulo(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ArticuloNoUsarPorAhora {
  id:             number;
  nombre:         string;
  imagenes:       string;
  descripcion:    string;
  cantidad:       number;
  precio:         number;
  tipo?:          string;
  formato?:       string;
  capacidad?:     number;
  kit?:           string;
  conexion?:      string;
  certificacion?: string;
  potencia?:      number;
  marca?:         string;
  modelo?:        string;
  socket?:        string;
  ram?:           RAM;
  procesador?:    Procesador;
  discoduro?:     Discoduro;
  grafica?:       Grafica;
  fuente?:        Fuentes;
}

export interface Discoduro {
  id:          number;
  nombre:      string;
  imagenes:    string;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  tipo:        string;
  capacidad:   number;
  conexion:    string;
}
export interface RAM {
  id:          number;
  nombre:      string;
  imagenes:    string;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  tipo:        string;
  formato:     string;
  capacidad:   number;
  kit:         string;
}



export interface Procesador {
  id:          number;
  nombre:      string;
  imagenes:    string;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  marca:       string;
  modelo:      string;
  socket:      string;
}
export interface Fuentes {
  id:            number;
  nombre:        string;
  imagenes:      string;
  descripcion:   string;
  cantidad:      number;
  precio:        number;
  certificacion: string;
  potencia:      number;
}

export interface Discos {
  id:          number;
  nombre:      string;
  imagenes:    string;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  tipo:        string;
  capacidad:   number;
  conexion:    string;
}

export interface Grafica {
  id:          number;
  nombre:      string;
  imagenes:    string;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  marca:       string;
  modelo:      string;
}
