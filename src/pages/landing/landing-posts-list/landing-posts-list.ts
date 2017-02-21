import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Post } from '../../../models/post';
import { PostDetailsPage } from '../../posts/post-details/post-details';

@Component({
  selector: 'landing-posts-list',
  templateUrl: 'landing-posts-list.html'
})
export class LandingPostsListPage {
  @Input() posts: Post[];
  postDetailsPage = PostDetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPostsList');
    console.log(this.posts);
  }

  viewDetails(post: Post) {
    this.navCtrl.push(this.postDetailsPage, {
      post: post
    });
  }

}
