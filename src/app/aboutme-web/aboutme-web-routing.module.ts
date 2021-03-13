import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmeWebPage } from './aboutme-web.page';

const routes: Routes = [
  {
    path: '',
    component: AboutmeWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutmeWebPageRoutingModule {}
