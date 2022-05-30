import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRamRoutingModule } from './editar-ram-routing.module';
import { EditarRamComponent } from './editar-ram.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarRamComponent
  ],
  imports: [
    CommonModule,
    EditarRamRoutingModule,
    FormsModule
  ]
})
export class EditarRamModule { }
