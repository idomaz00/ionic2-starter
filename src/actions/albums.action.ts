import { Action } from '@ngrx/store';
import { Album } from '../models/album';
import { Photo } from '../models/photo';
import { type } from '../util';

export const ActionTypes = {
    LOAD:                 type('[Album] Load'), 
    LOAD_SUCCESS:         type('[Album] Load Success'),
    LOAD_FAIL:            type('[Album] Load Fail'), 
    FETCH_ALBUM_PHOTO:    type('[Photo] Fetch Album Photo'),
    TOGGLE_FAVOURITE:     type('[Album] Toggle favourited flag'),

};

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Album[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}

/**
 * Load Album photo
 */

export class FetchAlbumPhotoAction implements Action {
    type = ActionTypes.FETCH_ALBUM_PHOTO;

    constructor(public payload: Photo[]) { }
}

/**
 * toggle favourite flag
 */

export class ToggleFavourite implements Action {
    type = ActionTypes.TOGGLE_FAVOURITE;

    constructor(public payload: Album[]) { }
}

export type Actions
    = LoadAction 
    | LoadSuccessAction 
    | LoadFailAction 
    | FetchAlbumPhotoAction 
    | ToggleFavourite;