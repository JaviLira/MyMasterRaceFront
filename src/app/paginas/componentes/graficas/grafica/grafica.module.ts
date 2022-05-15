import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficaRoutingModule } from './grafica-routing.module';
import { GraficaComponent } from './grafica.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GraficaComponent
  ],
  imports: [
    CommonModule,
    GraficaRoutingModule,
    ReactiveFormsModule
  ]
})
export class GraficaModule { }
