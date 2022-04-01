import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesadoresComponent } from './procesadores.component';

const routes: Routes = [{ path: '', component: ProcesadoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesadoresRoutingModule { }
