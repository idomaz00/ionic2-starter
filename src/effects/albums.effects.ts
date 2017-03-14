import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
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


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class AlbumsEffects {
  constructor(private actions$: Actions, private albumsService: AlbumsService) { }


  @Effect()
  loadAlbums$: Observable<Action> = this.actions$
    .ofType(albums.ActionTypes.LOAD)
    //.startWith(new albums.LoadAction())
    .switchMap(() => {
      return this.albumsService.getAlbums()
        .map(res => new albums.LoadSuccessAction(res))
        .catch(error => of(new albums.LoadFailAction(error)))
    });
}