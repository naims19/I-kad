import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutSetupMPage } from './about-setup-m.page';

const routes: Routes = [
  {
    path: '',
    component: AboutSetupMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutSetupMPageRoutingModule {}
