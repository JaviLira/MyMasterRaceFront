export interface LineaPedido {
  id:       number;
  cantidad: number;
  articulo: Articulo;
}

export interface Articulo {
  id:          number;
  nombre:      string;
  imagenes:    any;
  imagenGenerada?:     any;
  descripcion: string;
  cantidad:    number;
  precio:      number;
  marca?:      string;
  modelo?:     string;
  socket?:     string;
  tipo?:       string;
  formato?:    string;
  capacidad?:  number;
  kit?:        string;
  ram?:        Discoduro;
  procesador?: Procesador;
  discoduro?:  Discoduro;
  grafica?:    Grafica;
  fuente?:     Fuentes;
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
  imagenes:    any;
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
  imagenes:    any;
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
