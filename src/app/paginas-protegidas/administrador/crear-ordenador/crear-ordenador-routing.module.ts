import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearOrdenadorComponent } from './crear-ordenador.component';

const routes: Routes = [{ path: '', component: CrearOrdenadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearOrdenadorRoutingModule { }
