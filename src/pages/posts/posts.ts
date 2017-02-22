import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';

import { Post } from '../../models/post';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {
  rootHomePage: any = LandingPage;
  posts: Post[] = [];
  start: number = 0; 
  queryText: string = '';

  constructor(public navCtrl: NavController, private postsService: PostsService) {
    this.loadPosts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad posts');
  }

  goHome(): void {
    this.navCtrl.parent.parent.setRoot(LandingPage);
  }

  loadPosts() {
    this.posts = [...this.posts, ...this.postsService.loadPosts(this.start)];
    this.start += 15;
  }

  sortPosts(sortAsc: boolean) {
    if(sortAsc) {
      this.posts.sort(function(a: Post, b:Post) {
          if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
          return 0;
      })
    }
    else {
      this.posts.sort(function(a: Post, b:Post) {
          if(a.title.toLowerCase() < b.title.toLowerCase()) return 1;
          if(a.title.toLowerCase() > b.title.toLowerCase()) return -1;
          return 0;
      })
    }
  }

}
