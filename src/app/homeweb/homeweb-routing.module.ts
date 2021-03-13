import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomewebPage } from './homeweb.page';

const routes: Routes = [
  {
    path: '',
    component: HomewebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomewebPageRoutingModule {}
