import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioWebPage } from './portfolio-web.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioWebPageRoutingModule {}
