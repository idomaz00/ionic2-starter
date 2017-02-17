import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

import { Album } from '../models/album';

@Injectable()
export class DBProvider {
    database: SQLite;
    favourites: Array<Object>;

    constructor() {
        console.log('Hello DBProvider Provider');
    }

    InitialSetUp(): void {
        this.database = new SQLite();
        this.database.openDatabase({
            name: "data2.db",
            location: "default"
        }).then(() => {
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
        this.database.openDatabase({
            name: "data2.db", //izvuc u konfiguraciju
            location: "default"})
        .then(() => {
            this.fetchFromDB();
        }, (error) => {
            console.log("ERROR: ", error);
        });
    }
    //hardkodirano zasad
    addToDB(album: Album) {
        //TODO: 
        //preko parametara uzet VALUES
        //odvojit u stringu jedan querry i na mistima stavit te parametre
        let query = '('+ album.id +', '+ album.userId + ', ' + album.title +')' ;
        this.database.executeSql("INSERT INTO favourites (albumId, userId, title) VALUES "+ query, []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    fetchFromDB() {
        this.database.executeSql("SELECT * FROM favourites", []).then((data) => {
            this.favourites = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.favourites.push({title: data.rows.item(i).title, albumId: data.rows.item(i).albumId});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }

    getFavourites():Array<Object>  {
        this.database.executeSql("SELECT * FROM favourites", []).then((data) => {
            this.favourites = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.favourites.push({title: data.rows.item(i).title, albumId: data.rows.item(i).albumId});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });

        return this.favourites;
    }

}
