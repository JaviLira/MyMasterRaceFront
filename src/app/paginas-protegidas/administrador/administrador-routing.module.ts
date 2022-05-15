import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'crearOrdenador', loadChildren: () => import('./crear-ordenador/crear-ordenador.module').then(m => m.CrearOrdenadorModule) },
  { path: 'crearComponente', loadChildren: () => import('./crear-componente/crear-componente.module').then(m => m.CrearComponenteModule) },
  { path: 'editar-articulo', loadChildren: () => import('./editar-articulos/editar-articulos.module').then(m => m.EditarArticulosModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
