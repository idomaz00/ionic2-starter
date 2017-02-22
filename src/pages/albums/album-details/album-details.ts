import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { FavouritesService } from '../../../services/favourites.service';

import { Album } from '../../../models/album';
import { Photo } from '../../../models/photo';

@Component({
  selector: 'page-album-details',
  templateUrl: 'album-details.html'
})
export class AlbumDetailsPage {
  album: Album;
  photos: Observable<Array<Photo>>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private favouritesService: FavouritesService) {
    this.album = this.navParams.get('album');
    this.photos = this.navParams.get('photo');
  }

  addToFavourites(album:Album){
    this.favouritesService.addFavourite(album);
  }

  removeFromFavourites(album:Album){
    this.favouritesService.removeFavourite(album);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumDetailsPage'); 
  }
  
}
