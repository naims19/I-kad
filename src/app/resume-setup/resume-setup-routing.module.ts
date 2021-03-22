import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeSetupPage } from './resume-setup.page';

const routes: Routes = [
  {
    path: '',
    component: ResumeSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeSetupPageRoutingModule {}
