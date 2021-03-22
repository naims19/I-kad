import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PakejSetupPage } from './pakej-setup.page';

const routes: Routes = [
  {
    path: '',
    component: PakejSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PakejSetupPageRoutingModule {}
