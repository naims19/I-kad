import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeSetupMPage } from './resume-setup-m.page';

const routes: Routes = [
  {
    path: '',
    component: ResumeSetupMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeSetupMPageRoutingModule {}
