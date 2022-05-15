import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearOrdenadorRoutingModule } from './crear-ordenador-routing.module';
import { CrearOrdenadorComponent } from './crear-ordenador.component';


@NgModule({
  declarations: [
    CrearOrdenadorComponent
  ],
  imports: [
    CommonModule,
    CrearOrdenadorRoutingModule
  ]
})
export class CrearOrdenadorModule { }
