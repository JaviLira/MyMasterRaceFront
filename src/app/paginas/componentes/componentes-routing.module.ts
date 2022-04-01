import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesComponent } from './componentes.component';

const routes: Routes = [{ path: '', component: ComponentesComponent },
{ path: 'graficas', loadChildren: () => import('./graficas/graficas.module').then(m => m.GraficasModule) },
{ path: 'procesadores', loadChildren: () => import('./procesadores/procesadores.module').then(m => m.ProcesadoresModule) },
{ path: 'fuentes', loadChildren: () => import('./fuentes/fuentes.module').then(m => m.FuentesModule) },
{ path: 'discos', loadChildren: () => import('./discos/discos.module').then(m => m.DiscosModule) },
{ path: 'rams', loadChildren: () => import('./rams/rams.module').then(m => m.RamsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
