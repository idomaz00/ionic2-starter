import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../models/post';

import { Store } from '@ngrx/store';
import * as postsActions from '../actions/posts';

import { AppStore } from '../models/app-store';

@Injectable()
export class PostsService {
    loadingPosts: Observable<boolean>;
    posts: Observable<Array<Post>>;
    landingPosts: Observable<Array<Post>>;
    postsArray: Post[] = [];
    private API_PATH: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http, private store: Store<AppStore>) {
        this.loadingPosts = store.select('loading');
        this.posts = store.select('posts');
        this.landingPosts = store.select('landingPosts');
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
}