import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamRoutingModule } from './ram-routing.module';
import { RamComponent } from './ram.component';


@NgModule({
  declarations: [
    RamComponent
  ],
  imports: [
    CommonModule,
    RamRoutingModule
  ]
})
export class RamModule { }
