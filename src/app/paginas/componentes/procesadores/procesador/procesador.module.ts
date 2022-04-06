import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesadorRoutingModule } from './procesador-routing.module';
import { ProcesadorComponent } from './procesador.component';


@NgModule({
  declarations: [
    ProcesadorComponent
  ],
  imports: [
    CommonModule,
    ProcesadorRoutingModule
  ]
})
export class ProcesadorModule { }
