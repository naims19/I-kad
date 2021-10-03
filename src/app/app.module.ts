import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModalPageModule} from './modal/modal.module';
import {ProjectModalPageModule} from './project-modal/project-modal.module';

// firebase module
import { AngularFireModule } from '@angular/fire';
import {environment } from '../environments/environment';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
             BrowserModule,
             IonicModule.forRoot(), 
             AppRoutingModule, 
             ModalPageModule, 
             ProjectModalPageModule,
             AngularFireModule.initializeApp(environment.firebase),
             AngularFirestoreModule,
             AngularFireAuthModule,
             ReactiveFormsModule,
             FormsModule,
             IonicStorageModule.forRoot()
            ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
