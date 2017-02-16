import { Action } from '@ngrx/store';
import { Album } from '../models/album';
import { type } from '../util';

export const ActionTypes = {
    LOAD:           type('[Album] Load'),
    ADD_FAVOURITE:  type('[Album] Add favourite'),
    // REMOVE_FAVOURITE:  type('[Album] Remove favourite'),    
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor(public payload: Album[]) { }
}

export class AddFavouriteAction implements Action {
    type = ActionTypes.ADD_FAVOURITE;

    constructor(public payload: Album[]) { }
}

export type Actions
    = LoadAction | AddFavouriteAction;