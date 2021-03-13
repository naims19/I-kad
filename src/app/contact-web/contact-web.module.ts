import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactWebPageRoutingModule } from './contact-web-routing.module';

import { ContactWebPage } from './contact-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactWebPageRoutingModule
  ],
  declarations: [ContactWebPage]
})
export class ContactWebPageModule {}
