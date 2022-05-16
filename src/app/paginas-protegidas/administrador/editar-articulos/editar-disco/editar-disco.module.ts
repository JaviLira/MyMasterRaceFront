import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarDiscoRoutingModule } from './editar-disco-routing.module';
import { EditarDiscoComponent } from './editar-disco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarDiscoComponent
  ],
  imports: [
    CommonModule,
    EditarDiscoRoutingModule,
    FormsModule
  ]
})
export class EditarDiscoModule { }
