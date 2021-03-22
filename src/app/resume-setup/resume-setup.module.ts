import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumeSetupPageRoutingModule } from './resume-setup-routing.module';

import { ResumeSetupPage } from './resume-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumeSetupPageRoutingModule
  ],
  declarations: [ResumeSetupPage]
})
export class ResumeSetupPageModule {}
