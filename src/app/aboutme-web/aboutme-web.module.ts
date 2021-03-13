import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutmeWebPageRoutingModule } from './aboutme-web-routing.module';

import { AboutmeWebPage } from './aboutme-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutmeWebPageRoutingModule
  ],
  declarations: [AboutmeWebPage]
})
export class AboutmeWebPageModule {}
