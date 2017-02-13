import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../models/post';

@Injectable()
export class PostsService {
    private API_PATH: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) { }

    getPosts(): Observable<Post[]> {
        return this.http.get(this.API_PATH).map(res => res.json());
    }
}