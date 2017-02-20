import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { LandingPage } from '../landing/landing';

import { DBProvider } from '../../storage/db-provider';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {;
    favourites: Array<Object>;

    constructor(public navCtrl: NavController, public platform: Platform, public database: DBProvider) {
        this.platform.ready().then(() => {
            database.OpenExistingDatabase();
            this.favourites = database.getFavourites();
        });

    }

    refresh(): void {
        this.favourites = this.database.getFavourites();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad favourites');
    }

    goHome(): void {
        this.navCtrl.parent.parent.setRoot(LandingPage);
    }

}
