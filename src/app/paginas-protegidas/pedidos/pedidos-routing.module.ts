import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos.component';

const routes: Routes = [{ path: '', component: PedidosComponent }, { path: 'pedido/:id', loadChildren: () => import('./pedido/pedido.module').then(m => m.PedidoModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
