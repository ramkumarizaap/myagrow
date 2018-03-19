import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';

import {GlobalVars} from "../providers/globalVars";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  private user:any;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public app:App,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public globalvars: GlobalVars) {
    this.initializeApp();
    
    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Services', component: HomePage,icon:'ios-cog' },
      { title: 'Events', component: EventsPage,icon:'ios-flag' },
      { title: 'Login', component: LoginPage,icon:'ios-power'}
      ];
      this.app.viewWillEnter.subscribe(() => { 
      this.user = this.globalvars.getUserdata();
      if(this.user)
      {
         this.pages = [
              { title: 'Services', component: HomePage,icon:'ios-cog' },
              { title: 'Events', component: EventsPage,icon:'ios-flag' },
              { title: 'Profile', component: ProfilePage,icon:'ios-person'},
              { title: 'Logout', component: LoginPage,icon:'ios-power'}
              ];
      }
    });
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
