import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfolioSetupPageRoutingModule } from './portfolio-setup-routing.module';

import { PortfolioSetupPage } from './portfolio-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfolioSetupPageRoutingModule
  ],
  declarations: [PortfolioSetupPage]
})
export class PortfolioSetupPageModule {}
