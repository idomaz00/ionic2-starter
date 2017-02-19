import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { LandingPage } from '../landing/landing';

import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {;
    favourites: Array<Object>;

    constructor(public navCtrl: NavController, public platform: Platform, private favouritesService: FavouritesService ) {
        //database.OpenExistingDatabase();
        //this.favourites = database.getFavourites();
    }

    refresh(): void {
        this.favouritesService.getFavourites();
        //this.favourites = this.database.getFavourites();
        //this.favourites = this.favouritesService.getFavourites();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad favourites');
    }

    goHome(): void {
        this.navCtrl.parent.parent.setRoot(LandingPage);
    }

}
