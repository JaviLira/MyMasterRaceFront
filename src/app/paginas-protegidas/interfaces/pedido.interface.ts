// To parse this data:
//
//   import { Convert, Pedido } from "./file";
//
//   const pedido = Convert.toPedido(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { LineaPedido } from "./listaPedidos.interfce";

export interface Pedido {
  fechaPackInicio:  Date;
  fechaPackEntrega: Date;
  direccion:        string;
  telefono:         string;
  tipopago:         string;
  codigotarjeta:    string;
  tarjeta:          string;
  dueniotarjeta:    string;
  caducidadTarjeta: string;
  entregado:        boolean;
  enCamino:         boolean;
  id:               number;
  lineaPedido?:     LineaPedido[];
  precioTotal?:     number;
}
