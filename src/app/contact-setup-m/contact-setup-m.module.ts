import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactSetupMPageRoutingModule } from './contact-setup-m-routing.module';

import { ContactSetupMPage } from './contact-setup-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactSetupMPageRoutingModule
  ],
  declarations: [ContactSetupMPage]
})
export class ContactSetupMPageModule {}
