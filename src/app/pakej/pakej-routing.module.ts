import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PakejPage } from './pakej.page';

const routes: Routes = [
  {
    path: '',
    component: PakejPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PakejPageRoutingModule {}
