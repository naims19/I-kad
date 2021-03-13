import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfolioWebPageRoutingModule } from './portfolio-web-routing.module';

import { PortfolioWebPage } from './portfolio-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfolioWebPageRoutingModule
  ],
  declarations: [PortfolioWebPage]
})
export class PortfolioWebPageModule {}
