import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSocialMPageRoutingModule } from './admin-social-m-routing.module';

import { AdminSocialMPage } from './admin-social-m.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSocialMPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminSocialMPage]
})
export class AdminSocialMPageModule {}
