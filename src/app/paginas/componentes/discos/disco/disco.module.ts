import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoRoutingModule } from './disco-routing.module';
import { DiscoComponent } from './disco.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DiscoComponent
  ],
  imports: [
    CommonModule,
    DiscoRoutingModule,
    FormsModule
  ]
})
export class DiscoModule { }
