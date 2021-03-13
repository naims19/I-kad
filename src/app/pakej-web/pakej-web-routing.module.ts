import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PakejWebPage } from './pakej-web.page';

const routes: Routes = [
  {
    path: '',
    component: PakejWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PakejWebPageRoutingModule {}
