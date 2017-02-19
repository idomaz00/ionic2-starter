import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/app-store';
import * as favouritesActions from '../actions/favourites.action';

import { Album } from '../models/album';

export const DB_CONFIGURATION = {
    name:       "data2.db",
    location:   "default"
};

@Injectable()
export class DBProvider {
    favourites: Observable<Array<Album>>;
    database: SQLite;
    favouritesList: Array<Object>;

    constructor(private store: Store<AppStore>) {
        console.log('Hello DBProvider Provider');
        this.favourites = store.select('favourites');
        console.log('favdb ctor', this.favourites);
    }

    InitialSetUp(): void {
        this.database = new SQLite();
        this.database.openDatabase(DB_CONFIGURATION)
        .then(() => {
            this.database.executeSql("CREATE TABLE IF NOT EXISTS favourites (id INTEGER PRIMARY KEY AUTOINCREMENT, albumId INTEGER, userId INTEGER, title TEXT)", {})
                .then((data) => { 
                                    console.log("TABLE CREATED: ", data);
                                }, (error) => {
                                    console.error("Unable to execute sql", error);
                                })
        }, (error) => {
            console.error("Unable to open database", error);
        });
    }

    OpenExistingDatabase(): void {
        this.database.openDatabase(DB_CONFIGURATION)
        .then(() => {
            this.fetchFromDB();
        }, (error) => {
            console.log("ERROR: ", error);
        });
    }

    fetchFromDB() {
        this.database.executeSql("SELECT * FROM favourites", []).then((data) => {
            this.favouritesList = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.favouritesList.push({title: data.rows.item(i).title, albumId: data.rows.item(i).albumId});
                }
            }
            this.store.dispatch({ type: favouritesActions.ActionTypes.FETCH_FAVOURITES, payload: this.favouritesList});
             
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
            //this.store.dispatch({ type: favouritesActions.ActionTypes.ERROR, payload: this.favourites});
        });
    }

    addToDB(album: Album) {

        this.store.dispatch({ type: favouritesActions.ActionTypes.ADD_FAVOURITE, payload: album.id});
        //this.OpenExistingDatabase();
        // let query = '('+ album.id +', '+ album.userId + ', ' + album.title +')' ;
        // this.database.executeSql("INSERT INTO favourites (albumId, userId, title) VALUES "+ query, [])
        // .then((data) => {
        //     this.store.dispatch({ type: favouritesActions.ActionTypes.TOGGLE_FAVOURITE, payload: album.id});
        //     console.log("INSERTED: " + JSON.stringify(data));
        // }, (error) => {
        //     //this.store.dispatch({ type: favouritesActions.ActionTypes.ERROR, payload: album.id});
        //     console.log("ERROR: " + JSON.stringify(error.err));
        // });
    }

}
