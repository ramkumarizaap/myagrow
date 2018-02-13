import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EventsPage } from '../pages/events/events';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import {GlobalVars} from "../providers/globalVars";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  private user:any;
  rootPage: any = EventsPage;
  pages: Array<{title: string, component: any,icon:any,visible:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public globalvars: GlobalVars) {
    this.initializeApp();
    this.user = this.globalvars.getUserdata();
    console.log(this.user);
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Services', component: HomePage,icon:'ios-cog',visible:true },
      { title: 'Events', component: EventsPage,icon:'ios-flag',visible:true },
      { title: 'Logout', component: LoginPage,icon:'ios-power',visible:false }];
      if(!this.user)
      {
        this.pages.push({ title: 'Login', component: LoginPage,icon:'ios-log-in',visible:true });
      }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  _logout(page) {
    this.globalvars.deleteUserdata();
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(LoginPage);
  }
}
