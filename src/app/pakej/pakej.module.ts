import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PakejPageRoutingModule } from './pakej-routing.module';

import { PakejPage } from './pakej.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PakejPageRoutingModule
  ],
  declarations: [PakejPage]
})
export class PakejPageModule {}
