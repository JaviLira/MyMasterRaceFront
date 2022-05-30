import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarGraficaRoutingModule } from './editar-grafica-routing.module';
import { EditarGraficaComponent } from './editar-grafica.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarGraficaComponent
  ],
  imports: [
    CommonModule,
    EditarGraficaRoutingModule,
    FormsModule
  ]
})
export class EditarGraficaModule { }
