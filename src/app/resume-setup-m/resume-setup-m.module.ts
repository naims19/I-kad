import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumeSetupMPageRoutingModule } from './resume-setup-m-routing.module';

import { ResumeSetupMPage } from './resume-setup-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumeSetupMPageRoutingModule
  ],
  declarations: [ResumeSetupMPage]
})
export class ResumeSetupMPageModule {}
