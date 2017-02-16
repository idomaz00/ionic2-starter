import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlbumDetailsPage } from '../album-details/album-details';
import { Album } from '../../../models/album';

@Component({
  selector: 'albums-list',
  templateUrl: 'albums-list.html'
})
export class AlbumsListPage {
  @Input() albums: Album[]; 
  favourites: number [] = [];
  pushDetailsPage = AlbumDetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    console.log(this.albums);
  }

  addToFavourites(id:number){
    this.favourites.push(id);
    this.albums[id-1].isFavourite = true;
    console.log(this.favourites);

  }

  removeFromFavourites(id:number){
    this.favourites.splice(id,1);
    this.albums[id-1].isFavourite = false;
    console.log(this.favourites);

  }

}
