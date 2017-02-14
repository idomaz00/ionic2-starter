import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen} from 'ionic-native';

import { DBProvider } from '../storage/db-provider';

import { LandingPage } from '../pages/landing/landing';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LandingPage;

  constructor(platform: Platform, storage: DBProvider) {
    platform.ready().then(() => {
      storage.InitialSetUp();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
