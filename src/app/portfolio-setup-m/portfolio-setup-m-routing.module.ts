import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioSetupMPage } from './portfolio-setup-m.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioSetupMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioSetupMPageRoutingModule {}
