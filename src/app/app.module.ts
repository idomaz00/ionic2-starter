import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AlbumsPage } from '../pages/albums/albums';
import { AlbumDetailsPage } from '../pages/albums/album-details/album-details';
import { FavouritesPage } from '../pages/favourites/favourites';
import { PostsPage } from '../pages/posts/posts';

import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing';

@NgModule({
  declarations: [
    MyApp,
    AlbumsPage,
    AlbumDetailsPage,
    FavouritesPage,
    PostsPage,
    TabsPage,
    LandingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlbumsPage,
    AlbumDetailsPage,
    FavouritesPage,
    PostsPage,
    TabsPage,
    LandingPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
