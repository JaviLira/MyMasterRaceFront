import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuenteComponent } from './fuente.component';

const routes: Routes = [{ path: '', component: FuenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuenteRoutingModule { }
