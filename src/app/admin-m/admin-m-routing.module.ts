import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMPage } from './admin-m.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMPageRoutingModule {}
