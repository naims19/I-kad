import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactWebPage } from './contact-web.page';

const routes: Routes = [
  {
    path: '',
    component: ContactWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactWebPageRoutingModule {}
