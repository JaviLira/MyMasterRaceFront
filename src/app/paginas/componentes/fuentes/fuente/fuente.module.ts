import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuenteRoutingModule } from './fuente-routing.module';
import { FuenteComponent } from './fuente.component';


@NgModule({
  declarations: [
    FuenteComponent
  ],
  imports: [
    CommonModule,
    FuenteRoutingModule
  ]
})
export class FuenteModule { }
