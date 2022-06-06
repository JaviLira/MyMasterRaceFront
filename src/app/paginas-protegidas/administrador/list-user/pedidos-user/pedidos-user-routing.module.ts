import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosUserComponent } from './pedidos-user.component';

const routes: Routes = [{ path: '', component: PedidosUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosUserRoutingModule { }
