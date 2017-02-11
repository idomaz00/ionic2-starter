import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {

  rootHomePage: any = LandingPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad posts');
  }

  goHome(): void {
    this.navCtrl.parent.parent.setRoot(LandingPage);
  }

}
