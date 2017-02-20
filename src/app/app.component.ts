import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen} from 'ionic-native';

import { DBProvider } from '../storage/db-provider';
import { AlbumsService } from '../services/albums.service';
import { FavouritesService } from '../services/favourites.service';

import { LandingPage } from '../pages/landing/landing';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LandingPage;

  constructor(platform: Platform, storage: DBProvider, private albumsService: AlbumsService, private favouritesService: FavouritesService) {
    platform.ready().then(() => {
      storage.InitialSetUp();
      storage.OpenExistingDatabase();
      albumsService.getAlbums();

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
