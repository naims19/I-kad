import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeWebPage } from './resume-web.page';

const routes: Routes = [
  {
    path: '',
    component: ResumeWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeWebPageRoutingModule {}
