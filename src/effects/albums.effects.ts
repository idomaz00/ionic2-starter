import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { Album } from '../models/album';

import { AlbumsService } from '../services/albums.service';
import * as albums from '../actions/albums.action';

@Injectable()
export class AlbumsEffects {
  constructor(private actions$: Actions, private albumsService: AlbumsService) { }


  @Effect()
  loadAlbums$: Observable<Action> = this.actions$
    .ofType(albums.ActionTypes.LOAD)
    .startWith(new albums.LoadAction())
    .switchMap(() => {
      return this.albumsService.getAlbums()
        .map(res => new albums.LoadSuccessAction(res))
        .catch(error => of(new albums.LoadFailAction(error)))
    });
}

