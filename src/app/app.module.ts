import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AlbumsPage } from '../pages/albums/albums';
import { AlbumDetailsPage } from '../pages/albums/album-details/album-details';
import { FavouritesPage } from '../pages/favourites/favourites';
import { PostsPage } from '../pages/posts/posts';

import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing';
import { LandingPostsListPage } from '../pages/landing/landing-posts-list/landing-posts-list';

import { StoreModule } from '@ngrx/store';

import { PostsService } from '../services/posts';
import { DBProvider } from '../storage/db-provider';

import { postsReducer, landingPostsReducer } from '../reducers/posts';

import { AppPipesModule } from '../pipes/app-pipe';

@NgModule({
  declarations: [
    MyApp,
    AlbumsPage,
    AlbumDetailsPage,
    FavouritesPage,
    PostsPage,
    TabsPage,
    LandingPage,
    LandingPostsListPage
  ],
  imports: [
    AppPipesModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    StoreModule.provideStore({posts: postsReducer, landingPosts: landingPostsReducer})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlbumsPage,
    AlbumDetailsPage,
    FavouritesPage,
    PostsPage,
    TabsPage,
    LandingPage,
    LandingPostsListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, PostsService, DBProvider]
})
export class AppModule {}
