import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlbumDetailsPage } from '../albums/album-details/album-details';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html'
})
export class AlbumsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad albums');
  }

  pushPage = AlbumDetailsPage;

  goHome(): void {
    this.navCtrl.parent.parent.setRoot(LandingPage); 
  }


}
