import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AlbumsPage } from '../pages/albums/albums';
import { AlbumDetailsPage } from '../pages/albums/album-details/album-details';
import { FavouritesPage } from '../pages/favourites/favourites';
import { PostsPage } from '../pages/posts/posts';

import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing';

import { StoreModule } from '@ngrx/store';

import { PostsService } from '../services/posts';

import { reducer } from '../reducers/app-reducer';

import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from '../effects/posts';

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
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    StoreModule.provideStore(reducer),
    EffectsModule.run(PostsEffects),
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, PostsService]
})
export class AppModule {}
