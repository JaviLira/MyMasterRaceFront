"use strict";(self.webpackChunkmacabrosMasterRaceFront=self.webpackChunkmacabrosMasterRaceFront||[]).push([[783],{2783:(U,l,a)=>{a.r(l),a.d(l,{ResumenCompraModule:()=>P});var d=a(6019),n=a(8642),s=a(1659),u=a.n(s),e=a(2383),p=a(6726);function m(o,t){1&o&&e._UZ(0,"img",16)}function g(o,t){if(1&o&&e._UZ(0,"img",17),2&o){const i=e.oxw().$implicit;e.s9C("src",i.articulo.imagenGenerada,e.LSH)}}function Z(o,t){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const i=e.oxw().$implicit;e.xp6(1),e.hij("",i.articulo.precio.toFixed(2),"\u20ac")}}function _(o,t){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const i=e.oxw().$implicit;e.xp6(1),e.Oqu((i.articulo.precio+i.articulo.fuente.precio+i.articulo.grafica.precio+i.articulo.procesador.precio+i.articulo.ram.precio+i.articulo.discoduro.precio).toFixed(2))}}function f(o,t){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const i=e.oxw().$implicit;e.xp6(1),e.hij("",(i.articulo.precio*i.cantidad).toFixed(2),"\u20ac")}}function h(o,t){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const i=e.oxw().$implicit;e.xp6(1),e.Oqu(((i.articulo.precio+i.articulo.fuente.precio+i.articulo.grafica.precio+i.articulo.procesador.precio+i.articulo.ram.precio+i.articulo.discoduro.precio)*i.cantidad).toFixed(2))}}function T(o,t){if(1&o&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e.YNc(2,m,1,0,"img",12),e.YNc(3,g,1,1,"img",13),e.qZA(),e.TgZ(4,"td"),e.TgZ(5,"p",14),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"td"),e.TgZ(8,"p"),e._uU(9),e.qZA(),e.qZA(),e.YNc(10,Z,2,1,"td",15),e.YNc(11,_,2,1,"td",15),e.YNc(12,f,2,1,"td",15),e.YNc(13,h,2,1,"td",15),e.qZA()),2&o){const i=t.$implicit;e.xp6(2),e.Q6J("ngIf","data:image/png;base64,null"==i.articulo.imagenGenerada),e.xp6(1),e.Q6J("ngIf","data:image/png;base64,null"!=i.articulo.imagenGenerada),e.xp6(3),e.Oqu(i.articulo.nombre),e.xp6(3),e.Oqu(i.cantidad),e.xp6(1),e.Q6J("ngIf",null==i.articulo.grafica),e.xp6(1),e.Q6J("ngIf",null!=i.articulo.grafica),e.xp6(1),e.Q6J("ngIf",null==i.articulo.grafica),e.xp6(1),e.Q6J("ngIf",null!=i.articulo.grafica)}}function v(o,t){if(1&o&&(e.TgZ(0,"div",4),e.TgZ(1,"div",9),e.TgZ(2,"table",10),e.TgZ(3,"thead"),e.TgZ(4,"th"),e._uU(5,"Producto"),e.qZA(),e._UZ(6,"th"),e.TgZ(7,"th"),e._uU(8,"Cantidad"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Precio unidad"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Precio total"),e.qZA(),e.qZA(),e.YNc(13,T,14,8,"tr",11),e.TgZ(14,"tr"),e._UZ(15,"td"),e._UZ(16,"td"),e.TgZ(17,"td"),e._uU(18,"Total"),e.qZA(),e._UZ(19,"td"),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const i=e.oxw(2);e.xp6(13),e.Q6J("ngForOf",i.lineaPedido),e.xp6(8),e.hij("",i.valorTotal.toFixed(2),"\u20ac")}}const x=function(){return["/paginas/ordenadores"]};function A(o,t){if(1&o&&(e.TgZ(0,"div",2),e.YNc(1,v,22,2,"div",3),e.TgZ(2,"div",4),e.TgZ(3,"div",5),e._uU(4," Resumen compra "),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"div",6),e.TgZ(7,"h2"),e._uU(8,"Su pedido se enviara a la direcci\xf3n: "),e.qZA(),e.TgZ(9,"p"),e._uU(10),e.qZA(),e.TgZ(11,"h2"),e._uU(12,"Se contactar\xe1 al tel\xe9fono: "),e.qZA(),e.TgZ(13,"p"),e._uU(14),e.qZA(),e.TgZ(15,"h2"),e._uU(16,"Su pedido ha sido pagado por: "),e.qZA(),e.TgZ(17,"p"),e._uU(18),e.qZA(),e.TgZ(19,"h2"),e._uU(20,"El due\xf1o de la tarjeta es: "),e.qZA(),e.TgZ(21,"p"),e._uU(22),e.qZA(),e.qZA(),e._UZ(23,"br"),e.qZA(),e.TgZ(24,"div",7),e.TgZ(25,"button",8),e._uU(26,"Finalizar"),e.qZA(),e.qZA(),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.esperaArticulos),e.xp6(9),e.Oqu(i.pedido.direccion),e.xp6(4),e.Oqu(i.pedido.telefono),e.xp6(4),e.Oqu(i.pedido.tipopago),e.xp6(4),e.Oqu(i.pedido.dueniotarjeta),e.xp6(3),e.Q6J("routerLink",e.DdM(6,x))}}const C=[{path:"",component:(()=>{class o{constructor(i,r,c){this.sevicePedido=i,this.route=r,this.router=c,this.esperaPedido=!1,this.esperaArticulos=!1,this.valorTotal=0}ngOnInit(){this.traerPedido()}traerPedido(){this.sevicePedido.buscarPedio(this.route.snapshot.paramMap.get("id")).subscribe({next:i=>{this.pedido=i,this.esperaPedido=!0},error:i=>{u().fire("El pedido no se a encontrado",i.error.mensaje)}}),this.sevicePedido.buscarLineasPedido(this.route.snapshot.paramMap.get("id")).subscribe({next:i=>{this.lineaPedido=i;for(let r=0;r<this.lineaPedido.length;r++){let c=this.lineaPedido[r].articulo;c.imagenGenerada=this.sevicePedido.obtenerFoto(c)}this.esperaArticulos=!0,this.calcularTotal()},error:i=>{u().fire("El ordenador no se a encontrado",i.error.mensaje)}})}calcularTotal(){for(let i=0;i<this.lineaPedido.length;i++)this.valorTotal=null!=this.lineaPedido[i].articulo.discoduro?this.valorTotal+(this.lineaPedido[i].articulo.precio+this.lineaPedido[i].articulo.procesador.precio+this.lineaPedido[i].articulo.ram.precio+this.lineaPedido[i].articulo.fuente.precio+this.lineaPedido[i].articulo.grafica.precio+this.lineaPedido[i].articulo.discoduro.precio)*this.lineaPedido[i].cantidad:this.valorTotal+this.lineaPedido[i].articulo.precio*this.lineaPedido[i].cantidad}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(p.$),e.Y36(n.gz),e.Y36(n.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-resumen-compra"]],decls:3,vars:1,consts:[[1,"container","p-4","bg-white"],["class","row",4,"ngIf"],[1,"row"],["class","col",4,"ngIf"],[1,"col"],[1,"col-lg-12","h1"],[1,"col-lg-12"],[1,"col-12"],[1,"btn","btn-primary",3,"routerLink"],[1,"table-responsive"],[1,"table","table-bordered","table-condensed"],[4,"ngFor","ngForOf"],["align","center","src","./assets/carrito.png","class","nailsLogin col-12 img1","alt","imagen articulo",4,"ngIf"],["align","center","class","card-img-top img1","alt","imagen articulo",3,"src",4,"ngIf"],["align","left"],[4,"ngIf"],["align","center","src","./assets/carrito.png","alt","imagen articulo",1,"nailsLogin","col-12","img1"],["align","center","alt","imagen articulo",1,"card-img-top","img1",3,"src"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.YNc(2,A,27,7,"div",1),e.qZA(),e.qZA()),2&i&&(e.xp6(2),e.Q6J("ngIf",r.esperaPedido))},directives:[d.O5,n.rH,d.sg],styles:["table[_ngcontent-%COMP%]{border-radius:10px}"]}),o})()}];let q=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[n.Bz.forChild(C)],n.Bz]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.ez,q]]}),o})()}}]);