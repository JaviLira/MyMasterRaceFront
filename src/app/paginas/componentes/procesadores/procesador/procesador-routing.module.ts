import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesadorComponent } from './procesador.component';

const routes: Routes = [{ path: '', component: ProcesadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesadorRoutingModule { }
