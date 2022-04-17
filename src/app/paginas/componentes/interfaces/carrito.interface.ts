import { ArticuloNoUsarPorAhora } from "./articulo.interface";

export interface Carrito {
  id:       number;
  articulo: ArticuloNoUsarPorAhora;
  cantidad: number;
}
