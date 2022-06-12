"use strict";(self.webpackChunkmacabrosMasterRaceFront=self.webpackChunkmacabrosMasterRaceFront||[]).push([[868],{8241:(ee,g,r)=>{r.r(g),r.d(g,{PedidosUserModule:()=>X});var p=r(6019),u=r(8642),h=r(1659),m=r.n(h),e=r(2383),l=r(4522),U=r(8260);let T=(()=>{class o{constructor(t){this.http=t,this.baseUrl=U.N.baseUrl}sacarPedidosUsuario(t){const a=`${this.baseUrl}/usuario/${t}/pedido`,i=(new l.WM).set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(a,{headers:i})}modificarPedido(t,a){const i=`${this.baseUrl}/usuario/${t}/pedido/${a.id}`,c=(new l.WM).set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(i,a,{headers:c})}buscarLineasPedido(t){const a=`${this.baseUrl}/pedido/${t}/lineaPedido`,i=(new l.WM).set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(a,{headers:i})}obtenerFoto(t){return`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(t.imagenes)))}`+t.imagenes}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(l.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var x=r(9158),f=r(5286),b=r(481),s=r(9326),_=r(4750);function A(o,n){1&o&&(e.TgZ(0,"h3",1),e._uU(1,"No tiene pedidos"),e.qZA())}function P(o,n){1&o&&e._UZ(0,"th",30)}function C(o,n){if(1&o&&(e.TgZ(0,"tr"),e.YNc(1,P,1,0,"th",17),e.TgZ(2,"th",18),e._uU(3,"ID "),e._UZ(4,"p-sortIcon",19),e.qZA(),e.TgZ(5,"th",20),e._uU(6,"Direccion "),e._UZ(7,"p-sortIcon",21),e.qZA(),e.TgZ(8,"th",22),e._uU(9,"Inicio "),e._UZ(10,"p-sortIcon",23),e.qZA(),e.TgZ(11,"th",24),e._uU(12,"Fin "),e._UZ(13,"p-sortIcon",25),e.qZA(),e.TgZ(14,"th",26),e._uU(15,"Estado "),e._UZ(16,"p-sortIcon",27),e.qZA(),e.TgZ(17,"th",28),e._uU(18,"Precio "),e._UZ(19,"p-sortIcon",29),e.qZA(),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf","ROLE_ADMIN"==t.usuario.rol)}}function v(o,n){if(1&o&&(e.TgZ(0,"td"),e._UZ(1,"button",33),e.qZA()),2&o){const t=e.oxw(),a=t.$implicit,i=t.expanded;e.xp6(1),e.Q6J("pRowToggler",a)("icon",i?"pi pi-chevron-down":"pi pi-chevron-right")}}function I(o,n){1&o&&(e.TgZ(0,"td"),e._uU(1,"Aun no entregado"),e.qZA())}function q(o,n){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(e.xi3(2,1,t.fechaPackEntrega,"MM/dd/yyyy"))}}function y(o,n){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.precioTotal.toFixed(2)," \u20ac")}}function N(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"tr"),e.YNc(1,v,2,2,"td",31),e.TgZ(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"date"),e.qZA(),e.YNc(9,I,2,0,"td",31),e.YNc(10,q,3,4,"td",31),e.TgZ(11,"td",32),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(2).cambiarEstado(c)}),e._uU(12),e.qZA(),e.YNc(13,y,2,1,"td",31),e.qZA()}if(2&o){const t=n.$implicit,a=e.oxw(2);e.xp6(1),e.Q6J("ngIf","ROLE_ADMIN"==a.usuario.rol),e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.direccion),e.xp6(2),e.Oqu(e.xi3(8,8,t.fechaPackInicio,"MM/dd/yyyy")),e.xp6(2),e.Q6J("ngIf",""==t.fechaPackEntrega),e.xp6(1),e.Q6J("ngIf",""!=t.fechaPackEntrega),e.xp6(2),e.Oqu(t.estado),e.xp6(1),e.Q6J("ngIf",null!=t.precioTotal)}}function S(o,n){1&o&&(e.TgZ(0,"tr"),e.TgZ(1,"th",38),e._uU(2,"Id "),e._UZ(3,"p-sortIcon",39),e.qZA(),e.TgZ(4,"th",40),e._uU(5,"Imagen "),e._UZ(6,"p-sortIcon",41),e.qZA(),e.TgZ(7,"th",42),e._uU(8,"Nombre "),e._UZ(9,"p-sortIcon",43),e.qZA(),e.TgZ(10,"th",44),e._uU(11,"Cantidad "),e._UZ(12,"p-sortIcon",45),e.qZA(),e.TgZ(13,"th",28),e._uU(14,"Precio "),e._UZ(15,"p-sortIcon",29),e.qZA(),e.TgZ(16,"th",46),e._uU(17,"Precio total "),e._UZ(18,"p-sortIcon",47),e.qZA(),e.qZA())}function E(o,n){1&o&&e._UZ(0,"img",50)}function J(o,n){if(1&o&&e._UZ(0,"img",51),2&o){const t=e.oxw().$implicit;e.s9C("src",t.articulo.imagenGenerada,e.LSH)}}function M(o,n){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.articulo.precio.toFixed(2)," \u20ac")}}function $(o,n){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij("",(t.articulo.precio+t.articulo.fuente.precio+t.articulo.grafica.precio+t.articulo.procesador.precio+t.articulo.ram.precio+t.articulo.discoduro.precio).toFixed(2)," \u20ac")}}function Y(o,n){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij("",(t.articulo.precio*t.cantidad).toFixed(2)," \u20ac")}}function k(o,n){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij("",((t.articulo.precio+t.articulo.fuente.precio+t.articulo.grafica.precio+t.articulo.procesador.precio+t.articulo.ram.precio+t.articulo.discoduro.precio)*t.cantidad).toFixed(2)," \u20ac")}}function F(o,n){if(1&o&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.YNc(4,E,1,0,"img",48),e.YNc(5,J,1,1,"img",49),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.YNc(10,M,2,1,"td",31),e.YNc(11,$,2,1,"td",31),e.YNc(12,Y,2,1,"td",31),e.YNc(13,k,2,1,"td",31),e.qZA()),2&o){const t=n.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Q6J("ngIf","data:image/png;base64,null"==t.articulo.imagenGenerada),e.xp6(1),e.Q6J("ngIf","data:image/png;base64,null"!=t.articulo.imagenGenerada),e.xp6(2),e.Oqu(t.articulo.nombre),e.xp6(2),e.Oqu(t.articulo.cantidad),e.xp6(1),e.Q6J("ngIf",null==t.articulo.grafica),e.xp6(1),e.Q6J("ngIf",null!=t.articulo.grafica),e.xp6(1),e.Q6J("ngIf",null==t.articulo.grafica),e.xp6(1),e.Q6J("ngIf",null!=t.articulo.grafica)}}function Q(o,n){1&o&&(e.TgZ(0,"tr"),e.TgZ(1,"td",52),e._uU(2,"No hay pedidos"),e.qZA(),e.qZA())}function w(o,n){if(1&o&&(e.TgZ(0,"tr"),e.TgZ(1,"td",34),e.TgZ(2,"div",35),e.TgZ(3,"p-table",36),e.YNc(4,S,19,0,"ng-template",14),e.YNc(5,F,14,9,"ng-template",15),e.YNc(6,Q,3,0,"ng-template",37),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const t=n.$implicit;e.xp6(3),e.Q6J("value",t.lineaPedido)}}function O(o,n){if(1&o&&(e.TgZ(0,"p-table",13),e.YNc(1,C,20,1,"ng-template",14),e.YNc(2,N,14,11,"ng-template",15),e.YNc(3,w,7,1,"ng-template",16),e.qZA()),2&o){const t=e.oxw();e.Q6J("value",t.listaPedido)}}function j(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"p-button",53),e.NdJ("click",function(){return e.CHM(t),e.oxw().editarPedido()}),e.qZA(),e.TgZ(1,"p-button",54),e.NdJ("click",function(){return e.CHM(t),e.oxw().display=!1}),e.qZA()}}const L=function(){return{width:"150px"}},R=[{path:"",component:(()=>{class o{constructor(t,a,i){this.route=t,this.pedidoUserService=a,this.barraService=i,this.display=!1,this.espera=!1,this.listaPedido=[],this.idUsuario=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.listarPedidosUsuario()}listarPedidosUsuario(){this.pedidoUserService.sacarPedidosUsuario(this.route.snapshot.paramMap.get("id")).subscribe({next:t=>{this.listaPedido=t,this.sacarLineas()},error:t=>{m().fire("No ha podido recuperar los pedidos",t.error.mensaje)}})}sacarLineas(){let t=0;this.listaPedido.forEach(a=>{this.pedidoUserService.buscarLineasPedido(`${a.id}`).subscribe({next:i=>{a.lineaPedido=i;let c=0;for(let d=0;d<i.length;d++)c+=null!=i[d].articulo.discoduro?(i[d].articulo.precio+i[d].articulo.procesador.precio+i[d].articulo.ram.precio+i[d].articulo.fuente.precio+i[d].articulo.grafica.precio+i[d].articulo.discoduro.precio)*i[d].cantidad:i[d].articulo.precio*i[d].cantidad;for(let d=0;d<a.lineaPedido.length;d++){let Z=a.lineaPedido[d].articulo;Z.imagenGenerada=this.pedidoUserService.obtenerFoto(Z)}a.precioTotal=c},error:i=>{m().fire("No ha podido recuperar los pedidos",i.error.mensaje)}}),t++,t==this.listaPedido.length&&(this.espera=!0)})}get rolAdministrador(){return this.barraService.rolAdministrador}get usuario(){return this.barraService.usuario}cambiarEstado(t){this.pedidoEdit=t,this.display=!0}cambiarValorDelEstado(t){this.pedidoEdit.estado=t}editarPedido(){this.pedidoUserService.modificarPedido(this.usuario.name,this.pedidoEdit).subscribe({next:t=>{this.display=!1},error:t=>{m().fire("No ha podido recuperar los pedidos",t.error.mensaje)}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.gz),e.Y36(T),e.Y36(x.Z))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-pedidos-user"]],decls:18,vars:7,consts:[[1,"container","p-4","bg-white"],["align","center"],["align","center",4,"ngIf"],["dataKey","name",3,"value",4,"ngIf"],["header","Cambiar estado",3,"visible","baseZIndex","visibleChange"],[1,"divCenter"],["for","enAlmacen"],["type","radio","name","estado","value","En Almacen","checked","",1,"input-radio","check1",3,"click"],["for","enRepato"],["type","radio","value","En repato","name","estado","checked","",1,"input-radio","check1",3,"click"],["for","Entregado"],["type","radio","value","Entregado","name","estado","checked","",1,"input-radio","check1",3,"click"],["pTemplate","footer"],["dataKey","name",3,"value"],["pTemplate","header"],["pTemplate","body"],["pTemplate","rowexpansion"],["style","width: 3rem",4,"ngIf"],["pSortableColumn","idPedido"],["field","idPedido"],["pSortableColumn","direccion"],["field","direccion"],["pSortableColumn","inicio"],["field","inicio"],["pSortableColumn","fin"],["field","fin"],["pSortableColumn","estado"],["field","estado"],["pSortableColumn","precio"],["field","precio"],[2,"width","3rem"],[4,"ngIf"],[1,"pointer",3,"click"],["type","button","pButton","","pRipple","",1,"p-button-text","p-button-rounded","p-button-plain",3,"pRowToggler","icon"],["colspan","7"],[1,"p-p-3"],["dataKey","id",3,"value"],["pTemplate","emptymessage"],["pSortableColumn","idLinea"],["field","idLinea"],["pSortableColumn","imagen"],["field","imagen"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","cantidad"],["field","cantidad"],["pSortableColumn","precio-total"],["field","precio-total"],["align","center","src","./assets/carrito.png","class","nailsLogin col-12 img1","alt","imagen articulo",4,"ngIf"],["align","center","class","card-img-top img1","alt","imagen articulo",3,"src",4,"ngIf"],["align","center","src","./assets/carrito.png","alt","imagen articulo",1,"nailsLogin","col-12","img1"],["align","center","alt","imagen articulo",1,"card-img-top","img1",3,"src"],["colspan","6"],["icon","pi pi-check","label","Cambiar","styleClass","p-button-text",3,"click"],["icon","pi pi-times","label","Cancelar",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h2",1),e._uU(2,"Pedidos del usuario"),e.qZA(),e._UZ(3,"br"),e.YNc(4,A,2,0,"h3",2),e.YNc(5,O,4,1,"p-table",3),e.qZA(),e.TgZ(6,"p-dialog",4),e.NdJ("visibleChange",function(c){return a.display=c}),e.TgZ(7,"div",5),e.TgZ(8,"label",6),e.TgZ(9,"input",7),e.NdJ("click",function(){return a.cambiarValorDelEstado("En Almacen")}),e.qZA(),e._uU(10," En Almacen "),e.qZA(),e.TgZ(11,"label",8),e.TgZ(12,"input",9),e.NdJ("click",function(){return a.cambiarValorDelEstado("En repato")}),e.qZA(),e._uU(13," En repato "),e.qZA(),e.TgZ(14,"label",10),e.TgZ(15,"input",11),e.NdJ("click",function(){return a.cambiarValorDelEstado("Entregado")}),e.qZA(),e._uU(16," Entregado "),e.qZA(),e.qZA(),e.YNc(17,j,2,0,"ng-template",12),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngIf",!a.espera),e.xp6(1),e.Q6J("ngIf",a.espera),e.xp6(1),e.Akn(e.DdM(6,L)),e.Q6J("visible",a.display)("baseZIndex",1e4))},directives:[p.O5,f.V,b.jx,s.iA,s.lQ,s.fz,_.Hq,s.jB,_.zx],pipes:[p.uU],styles:[".pointer[_ngcontent-%COMP%]{cursor:pointer}.check1[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:10px}.divCenter[_ngcontent-%COMP%]{text-align:justify}"]}),o})()}];let z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(R)],u.Bz]}),o})();var B=r(4307),D=r(3495),V=r(6898),G=r(397),H=r(7043),W=r(8297),K=r(7537);let X=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.ez,f.S,z,s.U$,B.q4,D.vI,V.kW,_.hJ,G.EV,H.j,W.q,l.JF,K.u5]]}),o})()}}]);