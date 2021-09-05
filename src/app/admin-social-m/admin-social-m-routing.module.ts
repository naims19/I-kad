import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSocialMPage } from './admin-social-m.page';

const routes: Routes = [
  {
    path: '',
    component: AdminSocialMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSocialMPageRoutingModule {}
