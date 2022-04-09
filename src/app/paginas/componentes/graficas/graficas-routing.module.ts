import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficasComponent } from './graficas.component';

const routes: Routes = [{ path: '', component: GraficasComponent }, { path: 'grafica/:id', loadChildren: () => import('./grafica/grafica.module').then(m => m.GraficaModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
