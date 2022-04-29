import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarUsuarioRoutingModule } from './modificar-usuario-routing.module';
import { ModificarUsuarioComponent } from './modificar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModificarUsuarioComponent
  ],
  imports: [
    CommonModule,
    ModificarUsuarioRoutingModule,
    ReactiveFormsModule
  ],exports:[
    ModificarUsuarioComponent
  ]
})
export class ModificarUsuarioModule { }
