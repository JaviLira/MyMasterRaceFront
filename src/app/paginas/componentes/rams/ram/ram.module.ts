import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamRoutingModule } from './ram-routing.module';
import { RamComponent } from './ram.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RamComponent
  ],
  imports: [
    CommonModule,
    RamRoutingModule,
    ReactiveFormsModule
  ]
})
export class RamModule { }
