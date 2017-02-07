import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {
  tabPage: any = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      console.log('ctor landing');
  }

  goToTab(tabIndex: number): void {
    this.navCtrl.setRoot(TabsPage, {
      index: tabIndex
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
