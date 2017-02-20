import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { AlbumDetailsPage } from '../album-details/album-details';
import { Album } from '../../../models/album';

import { AppStore } from '../../../models/app-store';
import { AlbumsService } from '../../../services/albums';

@Component({
  selector: 'albums-list',
  templateUrl: 'albums-list.html'
})
export class AlbumsListPage {
  @Input() albums: Album[]; 
  favourites: number [] = [];
  pushDetailsPage = AlbumDetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<AppStore>, private albumsService: AlbumsService) {}

  addToFavourites(id:number){
    let album = this.albums[id-1];
    this.albumsService.addFavourite(this.albums[id-1]);
    
    //this.favourites.push(id); // za test
    //this.albums[id-1].isFavourite = true; //objects property id starts from 1 not from 0
    //console.log(this.favourites); // za test

  }

  removeFromFavourites(id:number){

    //this.albumsService.removeFavourite(id);

    //let index = this.favourites.indexOf(id);
    //this.favourites.splice(index,1);
    //this.albums[id-1].isFavourite = false; //objects property id starts from 1 not from 0
    //console.log(this.favourites);

  }

}
