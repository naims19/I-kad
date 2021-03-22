import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSocialPageRoutingModule } from './admin-social-routing.module';

import { AdminSocialPage } from './admin-social.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSocialPageRoutingModule
  ],
  declarations: [AdminSocialPage]
})
export class AdminSocialPageModule {}
