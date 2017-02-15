import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { LandingPage } from '../landing/landing';

import { Album } from '../../models/album';
import { AppStore } from '../../models/app-store';
import { AlbumsService } from '../../services/albums';

@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AlbumsPage {
  albums: Observable<Album[]>;  

  constructor(public navCtrl: NavController, private store: Store<AppStore>, private albumsService: AlbumsService) {
    this.albums = albumsService.albums;
    albumsService.getAlbums();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad albums');
  }

  goHome(): void {
    this.navCtrl.parent.parent.setRoot(LandingPage); 
  }

}
