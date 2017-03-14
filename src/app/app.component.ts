import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen} from 'ionic-native';

import { DBProvider } from '../storage/db-provider';
import { AlbumsService } from '../services/albums.service';
import { FavouritesService } from '../services/favourites.service';
import { PostsService } from '../services/posts.service';

import { LandingPage } from '../pages/landing/landing';
import { AlbumsPage } from '../pages/albums/albums';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = AlbumsPage;

  constructor(platform: Platform, storage: DBProvider, private albumsService: AlbumsService, private favouritesService: FavouritesService, private postsService: PostsService) {
    platform.ready().then(() => {
      //storage.InitialSetUp();
      //storage.OpenExistingDatabase();
      //albumsService.getAlbums();
      //postsService.fetchPosts();

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
