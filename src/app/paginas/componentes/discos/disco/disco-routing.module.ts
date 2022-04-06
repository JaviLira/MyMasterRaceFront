import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoComponent } from './disco.component';

const routes: Routes = [{ path: '', component: DiscoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoRoutingModule { }
