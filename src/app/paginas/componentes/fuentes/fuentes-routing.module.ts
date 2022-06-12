import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuentesComponent } from './fuentes.component';

const routes: Routes = [{ path: '', component: FuentesComponent }, { path: 'fuente/:id', loadChildren: () => import('./fuente/fuente.module').then(m => m.FuenteModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuentesRoutingModule { }