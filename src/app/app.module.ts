import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage, ModalContentPage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { EventsPage, EventModalContentPage } from '../pages/events/events';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { GoogleMaps} from '@ionic-native/google-maps';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {CommonService} from "../providers/commonService";
import {GlobalVars} from "../providers/globalVars";
import { Geolocation } from '@ionic-native/geolocation';
//import { Platform } from 'ionic-angular';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EventsPage,
    LoginPage,
    ModalContentPage,
    SignupPage,
    EventModalContentPage,
    ProfilePage,
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
    LoginPage,
    ModalContentPage,
    SignupPage,
    EventModalContentPage,
    ProfilePage,
  ],
  providers: [
    GlobalVars,
    StatusBar,
    InAppBrowser,
    SplashScreen,
    CommonService,
    GoogleMaps,
    Geolocation,
    //Platform,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
