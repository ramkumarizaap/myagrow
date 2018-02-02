import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage, ModalContentPage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EventsPage, EventModalContentPage } from '../pages/events/events';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {CommonService} from "../providers/commonService";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EventsPage,
    ModalContentPage,
    EventModalContentPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EventsPage,
    ModalContentPage,
    EventModalContentPage
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    SplashScreen,
    CommonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
