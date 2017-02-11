import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostsPage } from '../posts/posts';
import { AlbumsPage } from '../albums/albums';
import { FavouritesPage } from '../favourites/favourites';
import { LandingPage } from '../landing/landing';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tabPosts: any = PostsPage;
  tabAlbums: any = AlbumsPage;
  tabFavourites: any = FavouritesPage;
  tabIndex: number = 0; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabIndex = this.navParams.get('index');
    //this.switchTabs();
  }

  switchTabs() {
    this.tabIndex = this.navParams.get('index');
  }

}
