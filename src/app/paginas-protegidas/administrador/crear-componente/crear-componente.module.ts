import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearComponenteRoutingModule } from './crear-componente-routing.module';
import { CrearComponenteComponent } from './crear-componente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearComponenteComponent
  ],
  imports: [
    CommonModule,
    CrearComponenteRoutingModule,
    FormsModule
  ],exports:[
    CrearComponenteComponent
  ]
})
export class CrearComponenteModule { }
