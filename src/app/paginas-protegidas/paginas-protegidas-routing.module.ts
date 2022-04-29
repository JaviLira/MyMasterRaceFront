import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'datosUsuario', loadChildren: () => import('./datos-usuario/datos-usuario.module').then(m => m.DatosUsuarioModule) },
{ path: 'datos-compra', loadChildren: () => import('./formulario-compra/formulario-compra.module').then(m => m.FormularioCompraModule) },
{ path: 'carrito', loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoModule) },
{ path: 'pedidos', loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule) }

];


//formularioCompra
//datos-compra
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasProtegidasRoutingModule { }
