import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfolioSetupMPageRoutingModule } from './portfolio-setup-m-routing.module';

import { PortfolioSetupMPage } from './portfolio-setup-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfolioSetupMPageRoutingModule
  ],
  declarations: [PortfolioSetupMPage]
})
export class PortfolioSetupMPageModule {}
