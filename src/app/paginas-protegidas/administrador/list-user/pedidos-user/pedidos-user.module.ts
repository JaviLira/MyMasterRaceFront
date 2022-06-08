import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosUserRoutingModule } from './pedidos-user-routing.module';
import { PedidosUserComponent } from './pedidos-user.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';;


@NgModule({
  declarations: [
    PedidosUserComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    PedidosUserRoutingModule,
    TableModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class PedidosUserModule { }
