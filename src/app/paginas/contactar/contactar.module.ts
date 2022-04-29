import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactarRoutingModule } from './contactar-routing.module';
import { ContactarComponent } from './contactar.component';


@NgModule({
  declarations: [
    ContactarComponent
  ],
  imports: [
    CommonModule,
    ContactarRoutingModule
  ]
})
export class ContactarModule { }
