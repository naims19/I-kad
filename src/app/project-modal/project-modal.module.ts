import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectModalPageRoutingModule } from './project-modal-routing.module';

import { ProjectModalPage } from './project-modal.page';

const routes:Routes = [
  {
    path: "",
    component: ProjectModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectModalPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectModalPage]
})
export class ProjectModalPageModule {}
