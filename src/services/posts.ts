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
    posts: Observable<Array<Post>>;
    landingPosts: Observable<Array<Post>>;
    private API_PATH: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http, private store: Store<AppStore>) {
        this.posts = store.select('posts');
        this.landingPosts = store.select('landingPosts');
    }

    fetchPosts() {
        this.http.get(this.API_PATH)
            .map(res => res.json())
            .map(payload => ({ type: postsActions.ActionTypes.FETCH, payload }))
            .subscribe(action => { this.store.dispatch(action); this.store.dispatch({ type: postsActions.ActionTypes.LOAD_LANDING, payload: action.payload.slice(action.payload.length - 5) });});
    }
}