import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearComponenteRoutingModule } from './crear-componente-routing.module';
import { CrearComponenteComponent } from './crear-componente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    CrearComponenteComponent
  ],
  imports: [
    CommonModule,
    CrearComponenteRoutingModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    RippleModule
  ],exports:[
    CrearComponenteComponent
  ]
})
export class CrearComponenteModule { }
