import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { User } from '../models/user';

import { Store } from '@ngrx/store';
import * as postsActions from '../actions/posts';

import { AppStore } from '../models/app-store';

import { UsersService } from './users';

@Injectable()
export class PostsService {
    loadingPosts: Observable<boolean>;
    posts: Observable<Array<Post>>;
    landingPosts: Observable<Array<Post>>;
    postComments: Observable<Array<Comment>>;
    postsArray: Post[] = [];

    private API_PATH: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http, private store: Store<AppStore>, private usersService: UsersService) {
        this.loadingPosts = store.select('loading');
        this.posts = store.select('posts');
        this.landingPosts = store.select('landingPosts');
        this.postComments = store.select('postComments');
    }

    fetchPosts() {
        this.store.dispatch({ type: postsActions.ActionTypes.FETCH_IN_PROGRESS });
        this.http.get(this.API_PATH)
            .map(res => res.json())
            .map(payload => ({ type: postsActions.ActionTypes.FETCH, payload }))
            .subscribe(action => { 
                this.store.dispatch(action); 
                this.store.dispatch({ type: postsActions.ActionTypes.LOAD_LANDING, payload: action.payload.slice(action.payload.length - 5) });
                this.postsArray = action.payload;
            });
    }

    loadPosts(start: number = 0): Post[] {
        return this.postsArray.slice(start, start + 15);
    }

    fetchAuthor(userId: number): User {
        return this.usersService.getAuthor(userId);
    }

    fetchComments(postId: number) {
        this.http.get(`${this.API_PATH}/${postId}/comments`)
            .map(res => res.json())
            .map(payload => ({ type: postsActions.ActionTypes.FETCH_POST_COMMENTS, payload }))
            .subscribe(action => this.store.dispatch(action));
    }
}