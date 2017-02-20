import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AlbumsPage } from '../pages/albums/albums';
import { AlbumsListPage } from '../pages/albums/albums-list/albums-list';
import { AlbumDetailsPage } from '../pages/albums/album-details/album-details';

import { FavouritesPage } from '../pages/favourites/favourites';
import { PostsPage } from '../pages/posts/posts';

import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing';
import { LandingPostsListPage } from '../pages/landing/landing-posts-list/landing-posts-list';

import { StoreModule } from '@ngrx/store';

import { PostsService } from '../services/posts';
import { AlbumsService } from '../services/albums';
import { DBProvider } from '../storage/db-provider';

<<<<<<< 4702cafb3e9dfe3eee6335e579a33ed2411add3c
import { loadingPostsReducer, postsReducer, landingPostsReducer } from '../reducers/posts';
import { albumsReducer } from '../reducers/albums';
=======
import { postsReducer, landingPostsReducer } from '../reducers/posts';
import { albumsReducer, addFavouritesReducer} from '../reducers/albums';
>>>>>>> added state for adding favourites, not done

import { AppPipesModule } from '../pipes/app-pipe';

@NgModule({
  declarations: [
    MyApp,
    AlbumsPage,
    AlbumsListPage,
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
<<<<<<< 4702cafb3e9dfe3eee6335e579a33ed2411add3c
    StoreModule.provideStore({loading: loadingPostsReducer, posts: postsReducer, landingPosts: landingPostsReducer, albums: albumsReducer})
=======
    StoreModule.provideStore({posts: postsReducer, landingPosts: landingPostsReducer, albums: albumsReducer, favouriteAlbums: addFavouritesReducer})
>>>>>>> added state for adding favourites, not done
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlbumsPage,
    AlbumsListPage,
    AlbumDetailsPage,
    FavouritesPage,
    PostsPage,
    TabsPage,
    LandingPage,
    LandingPostsListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, PostsService, DBProvider, AlbumsService]
})
export class AppModule {}
