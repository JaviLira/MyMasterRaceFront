import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuenteRoutingModule } from './fuente-routing.module';
import { FuenteComponent } from './fuente.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FuenteComponent
  ],
  imports: [
    CommonModule,
    FuenteRoutingModule,
    ReactiveFormsModule
  ]
})
export class FuenteModule { }
