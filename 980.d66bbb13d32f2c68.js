"use strict";(self.webpackChunkmacabrosMasterRaceFront=self.webpackChunkmacabrosMasterRaceFront||[]).push([[980],{7980:(J,r,o)=>{o.r(r),o.d(r,{FuentesModule:()=>I});var a=o(6019),c=o(8642),u=o(1659),l=o.n(u),e=o(2383),m=o(4522),g=o(176);function p(t,i){1&t&&e._UZ(0,"img",12)}function f(t,i){if(1&t&&e._UZ(0,"img",13),2&t){const n=e.oxw(2).$implicit;e.s9C("src",n.imagenGenerada,e.LSH)}}const v=function(t){return["/paginas/componentes/fuentes/fuente",t]};function F(t,i){if(1&t&&(e.TgZ(0,"div",6),e.YNc(1,p,1,0,"img",7),e.YNc(2,f,1,1,"img",8),e.TgZ(3,"div",9),e.TgZ(4,"h3",10),e._uU(5),e.qZA(),e.TgZ(6,"p",11),e._uU(7),e.qZA(),e.qZA(),e.qZA()),2&t){const n=e.oxw().$implicit;e.Q6J("routerLink",e.VKq(5,v,n.id)),e.xp6(1),e.Q6J("ngIf","data:image/png;base64,null"==n.imagenGenerada),e.xp6(1),e.Q6J("ngIf","data:image/png;base64,null"!=n.imagenGenerada),e.xp6(3),e.Oqu(n.nombre),e.xp6(2),e.hij("",n.precio.toFixed(2),"\u20ac")}}function h(t,i){1&t&&e._UZ(0,"img",12)}function x(t,i){if(1&t&&e._UZ(0,"img",13),2&t){const n=e.oxw(2).$implicit;e.s9C("src",n.imagenGenerada,e.LSH)}}function _(t,i){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,h,1,0,"img",7),e.YNc(2,x,1,1,"img",8),e._UZ(3,"img",14),e.TgZ(4,"div",9),e.TgZ(5,"h3",10),e._uU(6),e.qZA(),e.TgZ(7,"p",11),e._uU(8),e.qZA(),e.qZA(),e.qZA()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf","data:image/png;base64,null"==n.imagenGenerada),e.xp6(1),e.Q6J("ngIf","data:image/png;base64,null"!=n.imagenGenerada),e.xp6(4),e.Oqu(n.nombre),e.xp6(2),e.hij("",n.precio.toFixed(2),"\u20ac")}}function Z(t,i){if(1&t&&(e.TgZ(0,"div",3),e.YNc(1,F,8,7,"div",4),e.YNc(2,_,9,4,"div",5),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("ngIf",n.cantidad>=1&&n.activo),e.xp6(1),e.Q6J("ngIf",n.cantidad<=0||!n.activo)}}function C(t,i){if(1&t&&(e.TgZ(0,"div",1),e.YNc(1,Z,3,2,"div",2),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.listaFuentes)}}const T=[{path:"",component:(()=>{class t{constructor(n,s){this.http=n,this.componentesService=s,this.espera=!1}ngOnInit(){this.buscarOrdenadores()}buscarOrdenadores(){this.componentesService.sacarFuentes().subscribe({next:n=>{this.listaFuentes=n;for(let s=0;s<this.listaFuentes.length;s++){let d=this.listaFuentes[s];d.imagenGenerada=this.componentesService.obtenerFoto(d)}this.espera=!0},error:n=>{console.log(n),l().fire("No se han podido cargar los datos del servidor")}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.eN),e.Y36(g.H))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-fuentes"]],decls:1,vars:1,consts:[["class","row gx-0","align","center",4,"ngIf"],["align","center",1,"row","gx-0"],["class","card","style","width: 18rem;",4,"ngFor","ngForOf"],[1,"card",2,"width","18rem"],[3,"routerLink",4,"ngIf"],[4,"ngIf"],[3,"routerLink"],["src","../../../../../assets/fuenteEjemplo.png","class","nailsLogin col-12 img2","alt","imagen articulo",4,"ngIf"],["class","card-img-top img2","alt","imagen articulo",3,"src",4,"ngIf"],[1,"card-body"],[1,"card-title"],[1,"precio"],["src","../../../../../assets/fuenteEjemplo.png","alt","imagen articulo",1,"nailsLogin","col-12","img2"],["alt","imagen articulo",1,"card-img-top","img2",3,"src"],["src","../../../assets/agotado.png","alt","imagen de fuente",1,"card-img-top","agotado"]],template:function(n,s){1&n&&e.YNc(0,C,2,1,"div",0),2&n&&e.Q6J("ngIf",s.espera)},directives:[a.O5,a.sg,c.rH],styles:["img[_ngcontent-%COMP%]{height:150px;width:150px}"]}),t})()},{path:"fuente/:id",loadChildren:()=>o.e(707).then(o.bind(o,1707)).then(t=>t.FuenteModule)}];let A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(T)],c.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.ez,A]]}),t})()}}]);