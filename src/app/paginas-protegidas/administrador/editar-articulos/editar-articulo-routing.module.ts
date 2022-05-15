import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'editarDisco/:id', loadChildren: () => import('./editar-disco/editar-disco.module').then(m => m.EditarDiscoModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarArticulosRoutingModule { }
