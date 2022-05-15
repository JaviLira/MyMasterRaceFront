import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactarRoutingModule } from './contactar-routing.module';
import { ContactarComponent } from './contactar.component';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactarComponent
  ],
  imports: [
    CommonModule,
    ContactarRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactarModule { }
