import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RamsComponent } from './rams.component';

const routes: Routes = [{ path: '', component: RamsComponent }, { path: 'ram/:id', loadChildren: () => import('./ram/ram.module').then(m => m.RamModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamsRoutingModule { }
