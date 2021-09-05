import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PakejSetupMPageRoutingModule } from './pakej-setup-m-routing.module';

import { PakejSetupMPage } from './pakej-setup-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PakejSetupMPageRoutingModule
  ],
  declarations: [PakejSetupMPage]
})
export class PakejSetupMPageModule {}
