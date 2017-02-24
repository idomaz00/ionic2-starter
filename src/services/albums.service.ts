import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Album } from '../models/album';
import { Photo } from '../models/photo';

import { Store } from '@ngrx/store';
import * as albumsActions from '../actions/albums.action';

import { AppStore } from '../models/app-store';

@Injectable()
export class AlbumsService {
    albums: Observable<Array<Album>>;
    photo: Observable<Photo>;
    private API_PATH: string = 'https://jsonplaceholder.typicode.com/albums';
    private API_PATH_PHOTOS: string = 'https://jsonplaceholder.typicode.com/photos';

    constructor(private http: Http, private store: Store<AppStore>) {
        this.albums = store.select('albums');
        this.photo = store.select('photo');
    }

    getAlbums() {
        this.http.get(this.API_PATH)
            .map(res => res.json())
            .map(payload => ({ type: albumsActions.ActionTypes.LOAD, payload }))
            .subscribe(action => this.store.dispatch(action));
    }

    fetchAlbumPhoto(albumId: number) {
        this.http.get(`${this.API_PATH_PHOTOS}?albumId=${albumId}&_limit=1`)
            .map(res => res.json())
            .map(payload => ({ type: albumsActions.ActionTypes.FETCH_ALBUM_PHOTO, payload }))
            .subscribe(action => this.store.dispatch(action));
    }

}