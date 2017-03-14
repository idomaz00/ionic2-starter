import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NavController, Platform } from 'ionic-angular';
import { LandingPage } from '../landing/landing';

import { Album } from '../../models/album';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {;
    // favourites: Observable<Array<Album>>;

    // constructor(public navCtrl: NavController, public platform: Platform, private favouritesService: FavouritesService ) {
    //     this.favourites = this.favouritesService.favourites;
    // }

    // ionViewDidLoad() {
    //     console.log('ionViewDidLoad favourites');
    // }

    // goHome(): void {
    //     this.navCtrl.parent.parent.setRoot(LandingPage);
    // }

}
