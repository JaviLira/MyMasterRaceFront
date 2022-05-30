import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarFuenteComponent } from './editar-fuente.component';

const routes: Routes = [{ path: '', component: EditarFuenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarFuenteRoutingModule { }
