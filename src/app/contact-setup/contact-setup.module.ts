import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactSetupPageRoutingModule } from './contact-setup-routing.module';

import { ContactSetupPage } from './contact-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactSetupPageRoutingModule
  ],
  declarations: [ContactSetupPage]
})
export class ContactSetupPageModule {}
