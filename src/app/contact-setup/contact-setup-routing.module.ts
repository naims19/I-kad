import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactSetupPage } from './contact-setup.page';

const routes: Routes = [
  {
    path: '',
    component: ContactSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactSetupPageRoutingModule {}
