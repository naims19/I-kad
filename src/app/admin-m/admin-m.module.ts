import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminMPageRoutingModule } from './admin-m-routing.module';

import { AdminMPage } from './admin-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminMPageRoutingModule
  ],
  declarations: [AdminMPage]
})
export class AdminMPageModule {}
