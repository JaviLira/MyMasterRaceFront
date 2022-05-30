import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarOrdenadorRoutingModule } from './editar-ordenador-routing.module';
import { EditarOrdenadorComponent } from './editar-ordenador.component';


@NgModule({
  declarations: [
    EditarOrdenadorComponent
  ],
  imports: [
    CommonModule,
    EditarOrdenadorRoutingModule
  ]
})
export class EditarOrdenadorModule { }
