import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad favourites');
  }

  goHome(): void {
    this.navCtrl.parent.parent.setRoot(LandingPage);
  }

}
