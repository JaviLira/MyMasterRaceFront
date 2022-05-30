import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarOrdenadorComponent } from './editar-ordenador.component';

const routes: Routes = [{ path: '', component: EditarOrdenadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarOrdenadorRoutingModule { }
