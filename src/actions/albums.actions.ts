import { Action } from '@ngrx/store';
import { Album } from '../models/album';
import { type } from '../util';

export const ActionTypes = {
    LOAD:           type('[Album] Load'),
    TOGGLE_FAVOURITE:  type('[Album] Toggle favourite'),
    //REMOVE_FAVOURITE:  type('[Album] Remove favourite'),    
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor(public payload: Album[]) { }
}

export class ToggleFavouriteAction implements Action {
    type = ActionTypes.TOGGLE_FAVOURITE;

    constructor(public payload: Album) { }
}

export type Actions
    = LoadAction | ToggleFavouriteAction;