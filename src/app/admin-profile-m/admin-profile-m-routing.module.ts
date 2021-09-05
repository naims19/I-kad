import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminProfileMPage } from './admin-profile-m.page';

const routes: Routes = [
  {
    path: '',
    component: AdminProfileMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProfileMPageRoutingModule {}
