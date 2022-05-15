import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesadorRoutingModule } from './procesador-routing.module';
import { ProcesadorComponent } from './procesador.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProcesadorComponent
  ],
  imports: [
    CommonModule,
    ProcesadorRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProcesadorModule { }
