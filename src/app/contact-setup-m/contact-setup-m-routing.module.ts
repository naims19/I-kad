import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactSetupMPage } from './contact-setup-m.page';

const routes: Routes = [
  {
    path: '',
    component: ContactSetupMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactSetupMPageRoutingModule {}
