import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { TabsPage } from '../tabs/tabs';
import { Post } from '../../models/post';
import { AppStore } from '../../models/app-store';

import { PostsService } from '../../services/posts';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
  tabPage: any = TabsPage;
  posts: Observable<Array<Post>>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<AppStore>, private postsService: PostsService) {
      console.log('ctor landing');

      this.posts = postsService.landingPosts;
      postsService.fetchPosts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad landing');
  }

  goToTab(tabIndex: number): void {
    this.navCtrl.push(TabsPage, {
      index: tabIndex
    });
  }

}
