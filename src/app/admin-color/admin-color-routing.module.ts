import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminColorPage } from './admin-color.page';

const routes: Routes = [
  {
    path: '',
    component: AdminColorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminColorPageRoutingModule {}
