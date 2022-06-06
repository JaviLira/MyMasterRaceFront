import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user.component';

const routes: Routes = [{ path: '', component: ListUserComponent },
 { path: 'pedidos-user/:id', loadChildren: () => import('./pedidos-user/pedidos-user.module').then(m => m.PedidosUserModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListUserRoutingModule { }
