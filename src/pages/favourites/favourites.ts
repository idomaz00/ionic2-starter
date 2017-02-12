import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { SQLite } from 'ionic-native';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {
  public database: SQLite;
  public favourites: Array<Object>;

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.platform.ready().then(() => {
            this.database = new SQLite();
            this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
                this.refresh();
            }, (error) => {
                console.log("ERROR: ", error);
            });
        });
    
  }

   public add() {
        this.database.executeSql("INSERT INTO favourites (title, author) VALUES ('Blurryfacenotface', '22pilots')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    public refresh() {
        this.database.executeSql("SELECT * FROM favourites", []).then((data) => {
            this.favourites = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.favourites.push({title: data.rows.item(i).title, author: data.rows.item(i).author});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad favourites');
  }

  goHome(): void {
    this.navCtrl.parent.parent.setRoot(LandingPage);
  }

}
