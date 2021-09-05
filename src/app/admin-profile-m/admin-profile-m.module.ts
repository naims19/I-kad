import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminProfileMPageRoutingModule } from './admin-profile-m-routing.module';

import { AdminProfileMPage } from './admin-profile-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminProfileMPageRoutingModule
  ],
  declarations: [AdminProfileMPage]
})
export class AdminProfileMPageModule {}
