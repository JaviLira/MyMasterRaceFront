import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarRamComponent } from './editar-ram.component';

const routes: Routes = [{ path: '', component: EditarRamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarRamRoutingModule { }
