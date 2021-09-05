import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminColorMPage } from './admin-color-m.page';

const routes: Routes = [
  {
    path: '',
    component: AdminColorMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminColorMPageRoutingModule {}
