import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuentesRoutingModule } from './fuentes-routing.module';
import { FuentesComponent } from './fuentes.component';


@NgModule({
  declarations: [
    FuentesComponent
  ],
  imports: [
    CommonModule,
    FuentesRoutingModule
  ],exports:[
    FuentesComponent
  ]
})
export class FuentesModule { }
