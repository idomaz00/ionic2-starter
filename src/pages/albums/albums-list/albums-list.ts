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
  pushDetailsPage = AlbumDetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
