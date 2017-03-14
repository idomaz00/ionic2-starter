import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { LandingPage } from '../landing/landing';

import { Album } from '../../models/album';
import { AppStore } from '../../models/app-store';
import * as fromRoot from '../../reducers/index.reducer';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AlbumsPage {
  // albumsObservable: Observable<Album[]>;
  // albums: Album[] = [];
  // queryText: string = '';
  // subscription: Subscription;

  // constructor(public navCtrl: NavController, private app:App, private store: Store<AppStore>, private albumsService: AlbumsService) {
  //   this.albumsObservable = albumsService.albums;
  //   this.subscription = this.albumsObservable.subscribe(albums => this.albums = albums);
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad albums');
  // }

  // goHome(): void {
  //   //const root = this.app.getRootNav();
  //   //root.popToRoot();
  //   this.navCtrl.parent.parent.setRoot(LandingPage); 
  // }

  // sortAlbums(sortAsc: boolean) {
  //   if(sortAsc) {
  //     this.albums.sort(function(a: Album, b:Album) {
  //         if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
  //         if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
  //         return 0;
  //     })
  //   }
  //   else {
  //     this.albums.sort(function(a: Album, b:Album) {
  //         if(a.title.toLowerCase() < b.title.toLowerCase()) return 1;
  //         if(a.title.toLowerCase() > b.title.toLowerCase()) return -1;
  //         return 0;
  //     })
  //   }
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  albums$: Observable<Album[]>;

  constructor(store: Store<fromRoot.State>) {
    this.albums$ = store.select(fromRoot.getAlbumsState);
  }

}
