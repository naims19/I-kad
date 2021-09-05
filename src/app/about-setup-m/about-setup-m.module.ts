import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutSetupMPageRoutingModule } from './about-setup-m-routing.module';

import { AboutSetupMPage } from './about-setup-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutSetupMPageRoutingModule
  ],
  declarations: [AboutSetupMPage]
})
export class AboutSetupMPageModule {}
