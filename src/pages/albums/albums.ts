import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html'
})
export class AlbumsPage {

  constructor(public navCtrl: NavController) {
    console.log('ctor albums');
  }

}
