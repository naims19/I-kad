import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbooutmeSetupPageRoutingModule } from './abooutme-setup-routing.module';

import { AbooutmeSetupPage } from './abooutme-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbooutmeSetupPageRoutingModule
  ],
  declarations: [AbooutmeSetupPage]
})
export class AbooutmeSetupPageModule {}
