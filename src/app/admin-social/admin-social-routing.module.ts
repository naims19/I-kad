import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSocialPage } from './admin-social.page';

const routes: Routes = [
  {
    path: '',
    component: AdminSocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSocialPageRoutingModule {}
