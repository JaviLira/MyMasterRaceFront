import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscosComponent } from './discos.component';

const routes: Routes = [{ path: '', component: DiscosComponent },
 { path: 'disco/:id', loadChildren: () => import('./disco/disco.module').then(m => m.DiscoModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscosRoutingModule { }
