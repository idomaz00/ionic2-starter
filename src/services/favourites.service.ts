import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Album } from '../models/album';

import { Store } from '@ngrx/store';
import * as favouritesActions from '../actions/favourites.action';
import * as albumsActions from '../actions/albums';

import { AppStore } from '../models/app-store';

import { DBProvider } from '../storage/db-provider';

@Injectable()
export class FavouritesService {
    favourites: Observable<Array<Album>>;
    albums: Observable<Array<Album>>;
    favouriteList: Array<Album>;
    constructor(private store: Store<AppStore>, private database: DBProvider) {
        this.favourites = store.select('favourites');
        console.log('fav service',this.favourites);
    }

    addFavourite(album: Album){
        console.log(album);
        this.store.dispatch({ type: albumsActions.ActionTypes.TOGGLE_FAVOURITE, payload: album.id});
        //this.store.dispatch({ type: favouritesActions.ActionTypes.ADD_FAVOURITE, payload: album.id});
        //this.database.addToDB(album);   
    }

    removeFavourite(album: Album){
        console.log(album);
        this.store.dispatch({ type: albumsActions.ActionTypes.TOGGLE_FAVOURITE, payload: album.id});
        //this.store.dispatch({ type: favouritesActions.ActionTypes.REMOVE_FAVOURITE, payload: album.id});
        //this.database.removeToDB(album);   
    }

    getFavourites(){
        //this.database.OpenExistingDatabase();

        //this.store.dispatch({ type: favouritesActions.ActionTypes.LOAD_FAVOURITES, payload: this.favourites});
    
    }

}