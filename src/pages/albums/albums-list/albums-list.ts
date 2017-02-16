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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  addToFavourites(id:number){
    this.favourites.push(id);
    this.albums[id-1].isFavourite = true; //objects property id starts from 1 not from 0
    console.log(this.favourites);

  }

  removeFromFavourites(id:number){
    let index = this.favourites.indexOf(id);
    this.favourites.splice(index,1);
    this.albums[id-1].isFavourite = false; //objects property id starts from 1 not from 0
    console.log(this.favourites);

  }

}
