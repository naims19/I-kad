import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PakejSetupPageRoutingModule } from './pakej-setup-routing.module';

import { PakejSetupPage } from './pakej-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PakejSetupPageRoutingModule
  ],
  declarations: [PakejSetupPage]
})
export class PakejSetupPageModule {}
