import { Byte } from "@angular/compiler/src/util";

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
  activo?: boolean;
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
  activo?: boolean;
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
  activo?: boolean;
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
  activo?: boolean;
}

export interface Discos {
  id:          number;
  nombre:      string;
  imagenes:    Byte[];
  imagenGenerada?:     any;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  tipo:        string;
  capacidad:   number;
  conexion:    string;
  activo?: boolean;
}
