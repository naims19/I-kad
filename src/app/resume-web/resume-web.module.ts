import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumeWebPageRoutingModule } from './resume-web-routing.module';

import { ResumeWebPage } from './resume-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumeWebPageRoutingModule
  ],
  declarations: [ResumeWebPage]
})
export class ResumeWebPageModule {}
