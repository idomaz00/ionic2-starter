import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { AlbumDetailsPage } from '../album-details/album-details';
import { Album } from '../../../models/album';

import { AppStore } from '../../../models/app-store';
import { FavouritesService } from '../../../services/favourites.service';
import { AlbumsService } from '../../../services/albums.service';

@Component({
  selector: 'albums-list',
  templateUrl: 'albums-list.html'
})
export class AlbumsListPage {
  @Input() albums: Album[]; 
  @Output() sortAlbums = new EventEmitter();
  albumDetailsPage = AlbumDetailsPage;
  sortAsc: boolean = false;
  isSorting: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<AppStore>, private favouritesService: FavouritesService, private albumsService: AlbumsService) {}

  viewDetails(album: Album) {
    this.albumsService.fetchAlbumPhoto(album.id);
    this.navCtrl.push(this.albumDetailsPage, {
      album: album,
      photo: this.albumsService.photo
    });
  }
  
  addToFavourites(album:Album){
    this.favouritesService.addFavourite(album);
  }

  removeFromFavourites(album:Album){
    this.favouritesService.removeFavourite(album);
  }

  toggleSort() {
    this.isSorting = true;
    this.sortAsc = !this.sortAsc;
    this.doSorting();
  }

  doSorting() {
    this.sortAlbums.emit(this.sortAsc);
  }

}
