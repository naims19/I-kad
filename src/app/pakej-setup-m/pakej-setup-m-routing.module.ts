import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PakejSetupMPage } from './pakej-setup-m.page';

const routes: Routes = [
  {
    path: '',
    component: PakejSetupMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PakejSetupMPageRoutingModule {}
