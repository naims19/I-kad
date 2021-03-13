import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PakejWebPageRoutingModule } from './pakej-web-routing.module';

import { PakejWebPage } from './pakej-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PakejWebPageRoutingModule
  ],
  declarations: [PakejWebPage]
})
export class PakejWebPageModule {}
