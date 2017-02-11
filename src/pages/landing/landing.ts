import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { TabsPage } from '../tabs/tabs';
// import { AppState } from '../../services/app-state';
import { Post } from '../../models/post';

import * as fromRoot from '../../reducers/app-reducer';

import { PostsService } from '../../services/posts';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
  tabPage: any = TabsPage;
 // posts: Observable<Post[]>;
  posts: Post[];

  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe(posts => { this.posts = posts; }); //minjat ce se
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<fromRoot.State>, private postsService: PostsService) {
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
