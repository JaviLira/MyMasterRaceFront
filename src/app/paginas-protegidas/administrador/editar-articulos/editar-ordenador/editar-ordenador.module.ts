import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarOrdenadorRoutingModule } from './editar-ordenador-routing.module';
import { EditarOrdenadorComponent } from './editar-ordenador.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarOrdenadorComponent
  ],
  imports: [
    CommonModule,
    EditarOrdenadorRoutingModule,
    FormsModule
  ]
})
export class EditarOrdenadorModule { }
