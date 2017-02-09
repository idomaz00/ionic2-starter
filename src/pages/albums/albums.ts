import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlbumDetailsPage } from '../albums/album-details/album-details';

@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html'
})
export class AlbumsPage {

  constructor(public navCtrl: NavController) {
    console.log('ctor albums');
  }

  pushPage = AlbumDetailsPage;
  
  goToDetails(): void {
     this.navCtrl.push(AlbumDetailsPage);
  }

}
