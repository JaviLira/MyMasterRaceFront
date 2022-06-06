import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosUserRoutingModule } from './pedidos-user-routing.module';
import { PedidosUserComponent } from './pedidos-user.component';


@NgModule({
  declarations: [
    PedidosUserComponent
  ],
  imports: [
    CommonModule,
    PedidosUserRoutingModule
  ]
})
export class PedidosUserModule { }
