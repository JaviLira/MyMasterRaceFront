import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoRoutingModule } from './disco-routing.module';
import { DiscoComponent } from './disco.component';


@NgModule({
  declarations: [
    DiscoComponent
  ],
  imports: [
    CommonModule,
    DiscoRoutingModule
  ]
})
export class DiscoModule { }
