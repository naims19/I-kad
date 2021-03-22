import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioSetupPage } from './portfolio-setup.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioSetupPageRoutingModule {}
