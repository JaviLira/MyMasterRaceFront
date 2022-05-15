import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarDiscoComponent } from './editar-disco.component';

const routes: Routes = [{ path: '', component: EditarDiscoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarDiscoRoutingModule { }
