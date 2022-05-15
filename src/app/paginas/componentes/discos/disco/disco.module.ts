import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoRoutingModule } from './disco-routing.module';
import { DiscoComponent } from './disco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DiscoComponent
  ],
  imports: [
    CommonModule,
    DiscoRoutingModule,
    ReactiveFormsModule
  ]
})
export class DiscoModule { }
