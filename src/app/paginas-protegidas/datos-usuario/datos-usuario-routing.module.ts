import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosUsuarioComponent } from './datos-usuario.component';

const routes: Routes = [{ path: '', component: DatosUsuarioComponent }, { path: 'modificarUsuario', loadChildren: () => import('./modificar-usuario/modificar-usuario.module').then(m => m.ModificarUsuarioModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosUsuarioRoutingModule { }
