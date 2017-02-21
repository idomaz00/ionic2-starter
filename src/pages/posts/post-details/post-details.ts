import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from '../../../models/post';
import { Comment } from '../../../models/comment';
import { User } from '../../../models/user';

import { PostsService } from '../../../services/posts';
import { UsersService } from '../../../services/users';

@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html'
})
export class PostDetailsPage {
  post: Post;
  comments: Observable<Array<Comment>>;
  author: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postsService: PostsService, private usersService: UsersService) {
      this.post = this.navParams.get('post');
      postsService.fetchComments(this.post.id);
      this.comments = postsService.postComments;
      this.author = usersService.getAuthor(this.post.userId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailsPage');
  }

}
