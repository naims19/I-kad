import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomewebPageRoutingModule } from './homeweb-routing.module';

import { HomewebPage } from './homeweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomewebPageRoutingModule
  ],
  declarations: [HomewebPage]
})
export class HomewebPageModule {}
