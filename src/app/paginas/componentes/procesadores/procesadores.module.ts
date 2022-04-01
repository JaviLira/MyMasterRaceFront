import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesadoresRoutingModule } from './procesadores-routing.module';
import { ProcesadoresComponent } from './procesadores.component';


@NgModule({
  declarations: [
    ProcesadoresComponent
  ],
  imports: [
    CommonModule,
    ProcesadoresRoutingModule
  ],exports:[
    ProcesadoresComponent
  ]
})
export class ProcesadoresModule { }
