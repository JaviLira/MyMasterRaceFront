import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarFuenteRoutingModule } from './editar-fuente-routing.module';
import { EditarFuenteComponent } from './editar-fuente.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarFuenteComponent
  ],
  imports: [
    CommonModule,
    EditarFuenteRoutingModule,
    FormsModule
  ]
})
export class EditarFuenteModule { }
