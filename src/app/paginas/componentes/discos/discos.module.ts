import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscosRoutingModule } from './discos-routing.module';
import { DiscosComponent } from './discos.component';


@NgModule({
  declarations: [
    DiscosComponent
  ],
  imports: [
    CommonModule,
    DiscosRoutingModule
  ],exports:[
    DiscosComponent
  ]
})
export class DiscosModule { }
