import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminColorPageRoutingModule } from './admin-color-routing.module';

import { AdminColorPage } from './admin-color.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminColorPageRoutingModule
  ],
  declarations: [AdminColorPage]
})
export class AdminColorPageModule {}
