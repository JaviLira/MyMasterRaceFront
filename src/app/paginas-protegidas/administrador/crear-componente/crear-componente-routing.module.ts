import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponenteComponent } from './crear-componente.component';

const routes: Routes = [{ path: '', component: CrearComponenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearComponenteRoutingModule { }
