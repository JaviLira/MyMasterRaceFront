import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosUsuarioRoutingModule } from './datos-usuario-routing.module';
import { DatosUsuarioComponent } from './datos-usuario.component';
import { OrdenadoresModule } from '../../paginas/ordenadores/ordenadores.module';


@NgModule({
  declarations: [
    DatosUsuarioComponent
  ],
  imports: [
    CommonModule,
    DatosUsuarioRoutingModule,
    OrdenadoresModule
  ],exports:[
    DatosUsuarioComponent
  ]
})
export class DatosUsuarioModule { }
