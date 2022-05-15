import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesOrdenadorRoutingModule } from './detalles-ordenador-routing.module';
import { DetallesOrdenadorComponent } from './detalles-ordenador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetallesOrdenadorComponent
  ],
  imports: [
    CommonModule,
    DetallesOrdenadorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],exports:[
    DetallesOrdenadorComponent
  ]
})
export class DetallesOrdenadorModule { }
