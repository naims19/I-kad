import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PakejpageSetupPageRoutingModule } from './pakejpage-setup-routing.module';

import { PakejpageSetupPage } from './pakejpage-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PakejpageSetupPageRoutingModule
  ],
  declarations: [PakejpageSetupPage]
})
export class PakejpageSetupPageModule {}
