import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamsRoutingModule } from './rams-routing.module';
import { RamsComponent } from './rams.component';


@NgModule({
  declarations: [
    RamsComponent
  ],
  imports: [
    CommonModule,
    RamsRoutingModule
  ],exports:[
    RamsComponent
  ]
})
export class RamsModule { }
