import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProcesadorComponent } from './editar-procesador.component';

const routes: Routes = [{ path: '', component: EditarProcesadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarProcesadorRoutingModule { }
