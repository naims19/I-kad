import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectModalPage } from './project-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectModalPageRoutingModule {}
