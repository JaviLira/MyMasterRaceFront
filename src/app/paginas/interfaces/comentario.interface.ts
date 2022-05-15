import { Usuario } from "../../paginas-protegidas/interfaces/usuario.interface";

export interface Comentario {
  id:         number;
  comentario: string;
  valoracion: number;
  usuario:    Usuario;
}

