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
