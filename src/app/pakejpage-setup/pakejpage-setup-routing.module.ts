import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PakejpageSetupPage } from './pakejpage-setup.page';

const routes: Routes = [
  {
    path: '',
    component: PakejpageSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PakejpageSetupPageRoutingModule {}
