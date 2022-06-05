import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'editarDisco/:id', loadChildren: () => import('./editar-disco/editar-disco.module').then(m => m.EditarDiscoModule) },
  { path: 'editarRam/:id', loadChildren: () => import('./editar-ram/editar-ram.module').then(m => m.EditarRamModule) },
  { path: 'editarProcesador/:id', loadChildren: () => import('./editar-procesador/editar-procesador.module').then(m => m.EditarProcesadorModule) },
  { path: 'editarFuente/:id', loadChildren: () => import('./editar-fuente/editar-fuente.module').then(m => m.EditarFuenteModule) },
  { path: 'editarGrafica/:id', loadChildren: () => import('./editar-grafica/editar-grafica.module').then(m => m.EditarGraficaModule) },
  { path: 'editarOrdenador/:id', loadChildren: () => import('./editar-ordenador/editar-ordenador.module').then(m => m.EditarOrdenadorModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarArticulosRoutingModule { }
