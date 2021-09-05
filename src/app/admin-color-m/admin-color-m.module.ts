import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminColorMPageRoutingModule } from './admin-color-m-routing.module';

import { AdminColorMPage } from './admin-color-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminColorMPageRoutingModule
  ],
  declarations: [AdminColorMPage]
})
export class AdminColorMPageModule {}
