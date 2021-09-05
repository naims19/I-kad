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
            ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
