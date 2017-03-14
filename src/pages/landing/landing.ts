import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { TabsPage } from '../tabs/tabs';
import { Post } from '../../models/post';
import { AppStore } from '../../models/app-store';

import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
  // tabPage: any = TabsPage;
  // posts: Observable<Array<Post>>;
  // isLoading: Observable<boolean>;

  // constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<AppStore>, private postsService: PostsService, private usersService: UsersService) {
  //     console.log('ctor landing');

  //     this.posts = postsService.landingPosts;
  //     //this.isLoading = postsService.loadingPosts;
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad landing');
  // }

  // goToTab(tabIndex: number): void {
  //   this.navCtrl.setRoot(TabsPage, {
  //     index: tabIndex
  //   });
  // }

}