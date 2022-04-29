import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactarComponent } from './contactar.component';

const routes: Routes = [{ path: '', component: ContactarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactarRoutingModule { }
