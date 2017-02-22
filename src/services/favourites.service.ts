import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Album } from '../models/album';

import { Store } from '@ngrx/store';
//import * as favouritesActions from '../actions/favourites.action';

import { AppStore } from '../models/app-store';

import { DBProvider } from '../storage/db-provider';
import { AlbumsService } from '../services/albums.service';

@Injectable()
export class FavouritesService {
    favourites: Observable<Array<Album>>;
    albums: Observable<Array<Album>>;
    constructor(private store: Store<AppStore>, private database: DBProvider, private albumsService: AlbumsService) {
        this.favourites = store.select('favourites');
    }

    addFavourite(album: Album){
        console.log(album);
        //this.store.dispatch({ type: favouritesActions.ActionTypes.ADD_FAVOURITE, payload: album});
        this.database.addToDB(album);   
    }

    removeFavourite(album: Album){
        //this.store.dispatch({ type: favouritesActions.ActionTypes.REMOVE_FAVOURITE, payload: album});
        this.database.removeFromDB(album);   
    }

}