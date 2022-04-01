import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ordenadores', loadChildren: () => import('./ordenadores/ordenadores.module').then(m => m.OrdenadoresModule) },
  { path: 'componentes', loadChildren: () => import('./componentes/componentes.module').then(m => m.ComponentesModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
