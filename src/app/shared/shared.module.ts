import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraDeNavegacionComponent } from './barra-de-navegacion/barra-de-navegacion.component';
import { AppRoutingModule } from '../app.routing';



@NgModule({
  declarations: [BarraDeNavegacionComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],exports:[
    BarraDeNavegacionComponent
  ]
})
export class SharedModule { }
