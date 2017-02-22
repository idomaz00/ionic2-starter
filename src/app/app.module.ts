import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AlbumsPage } from '../pages/albums/albums';
import { AlbumsListPage } from '../pages/albums/albums-list/albums-list';
import { AlbumDetailsPage } from '../pages/albums/album-details/album-details';

import { FavouritesPage } from '../pages/favourites/favourites';

import { PostsPage } from '../pages/posts/posts';
import { PostsListPage } from '../pages/posts/posts-list/posts-list';
import { PostDetailsPage } from '../pages/posts/post-details/post-details';

import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing';
import { LandingPostsListPage } from '../pages/landing/landing-posts-list/landing-posts-list';

import { StoreModule } from '@ngrx/store';

import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';
import { DBProvider } from '../storage/db-provider';

import { loadingPostsReducer, postsReducer, landingPostsReducer, postCommentsReducer } from '../reducers/posts.reducer';
import { usersReducer } from '../reducers/users.reducer';
import { AlbumsService } from '../services/albums.service';
import { FavouritesService } from '../services/favourites.service';

import { albumsReducer, albumPhotoReducer } from '../reducers/albums.reducer';
import { favouritesReducer } from '../reducers/favourites.reducer';

import { AppPipesModule } from '../pipes/app-pipe';

@NgModule({
  declarations: [
    MyApp,
    AlbumsPage,
    AlbumsListPage,
    AlbumDetailsPage,
    FavouritesPage,
    PostsPage,
    PostsListPage,
    PostDetailsPage,
    TabsPage,
    LandingPage,
    LandingPostsListPage
  ],
  imports: [
    AppPipesModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    StoreModule.provideStore({
      loading: loadingPostsReducer, 
      posts: postsReducer, 
      landingPosts: landingPostsReducer, 
      users: usersReducer,
      postComments: postCommentsReducer, 
      albums: albumsReducer, 
      favourites: favouritesReducer,
      photo: albumPhotoReducer,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlbumsPage,
    AlbumsListPage,
    AlbumDetailsPage,
    FavouritesPage,
    PostsPage,
    PostsListPage,
    PostDetailsPage,
    TabsPage,
    LandingPage,
    LandingPostsListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, PostsService, UsersService, DBProvider, AlbumsService, FavouritesService]
})
export class AppModule {}
