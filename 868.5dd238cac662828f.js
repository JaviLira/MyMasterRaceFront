"use strict";(self.webpackChunkmacabrosMasterRaceFront=self.webpackChunkmacabrosMasterRaceFront||[]).push([[868],{8241:(K,g,r)=>{r.r(g),r.d(g,{PedidosUserModule:()=>W});var _=r(6019),p=r(8642),h=r(1659),u=r.n(h),e=r(2383),d=r(4522),U=r(8260);let T=(()=>{class i{constructor(t){this.http=t,this.baseUrl=U.N.baseUrl}sacarPedidosUsuario(t){const n=`${this.baseUrl}/usuario/${t}/pedido`,o=(new d.WM).set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(n,{headers:o})}modificarPedido(t,n){const o=`${this.baseUrl}/usuario/${t}/pedido/${n.id}`,c=(new d.WM).set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(o,n,{headers:c})}buscarLineasPedido(t){const n=`${this.baseUrl}/pedido/${t}/lineaPedido`,o=(new d.WM).set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(n,{headers:o})}obtenerFoto(t){return`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(t.imagenes)))}`+t.imagenes}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(d.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var x=r(9158),f=r(5286),b=r(481),s=r(9326),m=r(4750);function A(i,a){1&i&&(e.TgZ(0,"h3",1),e._uU(1,"No tiene pedidos"),e.qZA())}function P(i,a){1&i&&e._UZ(0,"th",28)}function C(i,a){if(1&i&&(e.TgZ(0,"tr"),e.YNc(1,P,1,0,"th",17),e.TgZ(2,"th",18),e._uU(3,"ID "),e._UZ(4,"p-sortIcon",19),e.qZA(),e.TgZ(5,"th",20),e._uU(6,"Direccion "),e._UZ(7,"p-sortIcon",21),e.qZA(),e.TgZ(8,"th",22),e._uU(9,"Inicio "),e._UZ(10,"p-sortIcon",23),e.qZA(),e.TgZ(11,"th",24),e._uU(12,"Fin "),e._UZ(13,"p-sortIcon",25),e.qZA(),e.TgZ(14,"th",26),e._uU(15,"Precio "),e._UZ(16,"p-sortIcon",27),e.qZA(),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf","ROLE_ADMIN"==t.usuario.rol)}}function v(i,a){if(1&i&&(e.TgZ(0,"td"),e._UZ(1,"button",31),e.qZA()),2&i){const t=e.oxw(),n=t.$implicit,o=t.expanded;e.xp6(1),e.Q6J("pRowToggler",n)("icon",o?"pi pi-chevron-down":"pi pi-chevron-right")}}function I(i,a){if(1&i&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.precioTotal.toFixed(2)," \u20ac")}}function q(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"tr"),e.YNc(1,v,2,2,"td",29),e.TgZ(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td",30),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(2).cambiarEstado(c)}),e._uU(9),e.qZA(),e.YNc(10,I,2,1,"td",29),e.qZA()}if(2&i){const t=a.$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("ngIf","ROLE_ADMIN"==n.usuario.rol),e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.direccion),e.xp6(2),e.Oqu(t.fechaPackInicio),e.xp6(2),e.Oqu(t.estado),e.xp6(1),e.Q6J("ngIf",null!=t.precioTotal)}}function N(i,a){1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"th",36),e._uU(2,"Id "),e._UZ(3,"p-sortIcon",37),e.qZA(),e.TgZ(4,"th",38),e._uU(5,"Imagen "),e._UZ(6,"p-sortIcon",39),e.qZA(),e.TgZ(7,"th",40),e._uU(8,"Nombre "),e._UZ(9,"p-sortIcon",41),e.qZA(),e.TgZ(10,"th",42),e._uU(11,"Cantidad "),e._UZ(12,"p-sortIcon",43),e.qZA(),e.TgZ(13,"th",26),e._uU(14,"Precio "),e._UZ(15,"p-sortIcon",27),e.qZA(),e.TgZ(16,"th",44),e._uU(17,"Precio total "),e._UZ(18,"p-sortIcon",45),e.qZA(),e.qZA())}function S(i,a){1&i&&e._UZ(0,"img",48)}function y(i,a){if(1&i&&e._UZ(0,"img",49),2&i){const t=e.oxw().$implicit;e.s9C("src",t.articulo.imagenGenerada,e.LSH)}}function J(i,a){if(1&i&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.articulo.precio.toFixed(2)," \u20ac")}}function E(i,a){if(1&i&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.hij("",(t.articulo.precio+t.articulo.fuente.precio+t.articulo.grafica.precio+t.articulo.procesador.precio+t.articulo.ram.precio+t.articulo.discoduro.precio).toFixed(2)," \u20ac")}}function $(i,a){if(1&i&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.hij("",(t.articulo.precio*t.cantidad).toFixed(2)," \u20ac")}}function M(i,a){if(1&i&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.hij("",((t.articulo.precio+t.articulo.fuente.precio+t.articulo.grafica.precio+t.articulo.procesador.precio+t.articulo.ram.precio+t.articulo.discoduro.precio)*t.cantidad).toFixed(2)," \u20ac")}}function Y(i,a){if(1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.YNc(4,S,1,0,"img",46),e.YNc(5,y,1,1,"img",47),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.YNc(10,J,2,1,"td",29),e.YNc(11,E,2,1,"td",29),e.YNc(12,$,2,1,"td",29),e.YNc(13,M,2,1,"td",29),e.qZA()),2&i){const t=a.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Q6J("ngIf","data:image/png;base64,null"==t.articulo.imagenGenerada),e.xp6(1),e.Q6J("ngIf","data:image/png;base64,null"!=t.articulo.imagenGenerada),e.xp6(2),e.Oqu(t.articulo.nombre),e.xp6(2),e.Oqu(t.articulo.cantidad),e.xp6(1),e.Q6J("ngIf",null==t.articulo.grafica),e.xp6(1),e.Q6J("ngIf",null!=t.articulo.grafica),e.xp6(1),e.Q6J("ngIf",null==t.articulo.grafica),e.xp6(1),e.Q6J("ngIf",null!=t.articulo.grafica)}}function F(i,a){1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"td",50),e._uU(2,"No hay pedidos"),e.qZA(),e.qZA())}function k(i,a){if(1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"td",32),e.TgZ(2,"div",33),e.TgZ(3,"p-table",34),e.YNc(4,N,19,0,"ng-template",14),e.YNc(5,Y,14,9,"ng-template",15),e.YNc(6,F,3,0,"ng-template",35),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){const t=a.$implicit;e.xp6(3),e.Q6J("value",t.lineaPedido)}}function Q(i,a){if(1&i&&(e.TgZ(0,"p-table",13),e.YNc(1,C,17,1,"ng-template",14),e.YNc(2,q,11,6,"ng-template",15),e.YNc(3,k,7,1,"ng-template",16),e.qZA()),2&i){const t=e.oxw();e.Q6J("value",t.listaPedido)}}function j(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"p-button",51),e.NdJ("click",function(){return e.CHM(t),e.oxw().editarPedido()}),e.qZA(),e.TgZ(1,"p-button",52),e.NdJ("click",function(){return e.CHM(t),e.oxw().display=!1}),e.qZA()}}const w=function(){return{width:"150px"}},O=[{path:"",component:(()=>{class i{constructor(t,n,o){this.route=t,this.pedidoUserService=n,this.barraService=o,this.display=!1,this.espera=!1,this.listaPedido=[],this.idUsuario=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.listarPedidosUsuario()}listarPedidosUsuario(){this.pedidoUserService.sacarPedidosUsuario(this.route.snapshot.paramMap.get("id")).subscribe({next:t=>{this.listaPedido=t,this.sacarLineas()},error:t=>{u().fire("No ha podido recuperar los pedidos",t.error.mensaje)}})}sacarLineas(){let t=0;this.listaPedido.forEach(n=>{this.pedidoUserService.buscarLineasPedido(`${n.id}`).subscribe({next:o=>{n.lineaPedido=o;let c=0;for(let l=0;l<o.length;l++)c+=null!=o[l].articulo.discoduro?(o[l].articulo.precio+o[l].articulo.procesador.precio+o[l].articulo.ram.precio+o[l].articulo.fuente.precio+o[l].articulo.grafica.precio+o[l].articulo.discoduro.precio)*o[l].cantidad:o[l].articulo.precio*o[l].cantidad;for(let l=0;l<n.lineaPedido.length;l++){let Z=n.lineaPedido[l].articulo;Z.imagenGenerada=this.pedidoUserService.obtenerFoto(Z)}n.precioTotal=c},error:o=>{u().fire("No ha podido recuperar los pedidos",o.error.mensaje)}}),t++,t==this.listaPedido.length&&(this.espera=!0)})}get rolAdministrador(){return this.barraService.rolAdministrador}get usuario(){return this.barraService.usuario}cambiarEstado(t){this.pedidoEdit=t,this.display=!0}cambiarValorDelEstado(t){this.pedidoEdit.estado=t}editarPedido(){this.pedidoUserService.modificarPedido(this.usuario.name,this.pedidoEdit).subscribe({next:t=>{},error:t=>{u().fire("No ha podido recuperar los pedidos",t.error.mensaje)}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.gz),e.Y36(T),e.Y36(x.Z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-pedidos-user"]],decls:18,vars:7,consts:[[1,"container","p-4","bg-white"],["align","center"],["align","center",4,"ngIf"],["dataKey","name",3,"value",4,"ngIf"],["header","Cambiar estado",3,"visible","baseZIndex","visibleChange"],[1,"divCenter"],["for","enAlmacen"],["type","radio","name","estado","value","En Almacen","checked","",1,"input-radio","check1",3,"click"],["for","enRepato"],["type","radio","value","En repato","name","estado","checked","",1,"input-radio","check1",3,"click"],["for","Entregado"],["type","radio","value","Entregado","name","estado","checked","",1,"input-radio","check1",3,"click"],["pTemplate","footer"],["dataKey","name",3,"value"],["pTemplate","header"],["pTemplate","body"],["pTemplate","rowexpansion"],["style","width: 3rem",4,"ngIf"],["pSortableColumn","idPedido"],["field","idPedido"],["pSortableColumn","direccion"],["field","direccion"],["pSortableColumn","inicio"],["field","inicio"],["pSortableColumn","fin"],["field","fin"],["pSortableColumn","precio"],["field","precio"],[2,"width","3rem"],[4,"ngIf"],[1,"pointer",3,"click"],["type","button","pButton","","pRipple","",1,"p-button-text","p-button-rounded","p-button-plain",3,"pRowToggler","icon"],["colspan","7"],[1,"p-p-3"],["dataKey","id",3,"value"],["pTemplate","emptymessage"],["pSortableColumn","idLinea"],["field","idLinea"],["pSortableColumn","imagen"],["field","imagen"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","cantidad"],["field","cantidad"],["pSortableColumn","precio-total"],["field","precio-total"],["align","center","src","./assets/carrito.png","class","nailsLogin col-12 img1","alt","imagen articulo",4,"ngIf"],["align","center","class","card-img-top img1","alt","imagen articulo",3,"src",4,"ngIf"],["align","center","src","./assets/carrito.png","alt","imagen articulo",1,"nailsLogin","col-12","img1"],["align","center","alt","imagen articulo",1,"card-img-top","img1",3,"src"],["colspan","6"],["icon","pi pi-check","label","Cambiar","styleClass","p-button-text",3,"click"],["icon","pi pi-times","label","Cancelar",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h2",1),e._uU(2,"Pedidos del usuario"),e.qZA(),e._UZ(3,"br"),e.YNc(4,A,2,0,"h3",2),e.YNc(5,Q,4,1,"p-table",3),e.qZA(),e.TgZ(6,"p-dialog",4),e.NdJ("visibleChange",function(c){return n.display=c}),e.TgZ(7,"div",5),e.TgZ(8,"label",6),e.TgZ(9,"input",7),e.NdJ("click",function(){return n.cambiarValorDelEstado("En Almacen")}),e.qZA(),e._uU(10," En Almacen "),e.qZA(),e.TgZ(11,"label",8),e.TgZ(12,"input",9),e.NdJ("click",function(){return n.cambiarValorDelEstado("En repato")}),e.qZA(),e._uU(13," En repato "),e.qZA(),e.TgZ(14,"label",10),e.TgZ(15,"input",11),e.NdJ("click",function(){return n.cambiarValorDelEstado("Entregado")}),e.qZA(),e._uU(16," Entregado "),e.qZA(),e.qZA(),e.YNc(17,j,2,0,"ng-template",12),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngIf",!n.espera),e.xp6(1),e.Q6J("ngIf",n.espera),e.xp6(1),e.Akn(e.DdM(6,w)),e.Q6J("visible",n.display)("baseZIndex",1e4))},directives:[_.O5,f.V,b.jx,s.iA,s.lQ,s.fz,m.Hq,s.jB,m.zx],styles:[".pointer[_ngcontent-%COMP%]{cursor:pointer}.check1[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:10px}.divCenter[_ngcontent-%COMP%]{text-align:justify}"]}),i})()}];let L=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[p.Bz.forChild(O)],p.Bz]}),i})();var R=r(4307),z=r(3495),B=r(6898),D=r(397),V=r(7043),G=r(8297),H=r(7537);let W=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[_.ez,f.S,L,s.U$,R.q4,z.vI,B.kW,m.hJ,D.EV,V.j,G.q,d.JF,H.u5]]}),i})()}}]);