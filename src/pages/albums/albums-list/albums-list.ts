import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { AlbumDetailsPage } from '../album-details/album-details';
import { Album } from '../../../models/album';

import { AppStore } from '../../../models/app-store';
import { FavouritesService } from '../../../services/favourites.service';

@Component({
  selector: 'albums-list',
  templateUrl: 'albums-list.html'
})
export class AlbumsListPage {
  @Input() albums: Album[]; 
  pushDetailsPage = AlbumDetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<AppStore>, private favouritesService: FavouritesService) {}

  addToFavourites(id:number){
    let album = this.albums[id-1];
    this.favouritesService.addFavourite(album);
  }

  removeFromFavourites(id:number){
    let album = this.albums[id-1];
    this.favouritesService.removeFavourite(album);
  }

}
