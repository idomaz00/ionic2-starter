import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Post } from '../../../models/post';
import { PostDetailsPage } from '../post-details/post-details';

import { PostsService } from '../../../services/posts';

@Component({
  selector: 'posts-list',
  templateUrl: 'posts-list.html'
})
export class PostsListPage {
  @Input() posts: Post[];
  @Output() loadPosts = new EventEmitter();
  postDetailsPage = PostDetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postsService: PostsService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsListPage');
  }

  doInfinite(infiniteScroll) {
    this.loadPosts.emit();
    infiniteScroll.complete();
  }

  viewDetails(post: Post) {
    this.navCtrl.push(this.postDetailsPage, {
      post: post
    });
  }

}
