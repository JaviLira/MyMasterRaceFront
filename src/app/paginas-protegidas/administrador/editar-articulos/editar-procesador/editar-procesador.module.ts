import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarProcesadorRoutingModule } from './editar-procesador-routing.module';
import { EditarProcesadorComponent } from './editar-procesador.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarProcesadorComponent
  ],
  imports: [
    CommonModule,
    EditarProcesadorRoutingModule,
    FormsModule
  ]
})
export class EditarProcesadorModule { }
