import { Action } from '@ngrx/store';
import { Album } from '../models/album';
import { Photo } from '../models/photo';
import { type } from '../util';

export const ActionTypes = {
    LOAD:               type('[Album] Load'), 
    FETCH_ALBUM_PHOTO:  type('[Photo] Fetch Album Photo'),
    TOGGLE_FAVOURITE:  type('[Album] Toggle favourited flag'), 
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor(public payload: Album[]) { }
}

export class FetchAlbumPhotoAction implements Action {
    type = ActionTypes.FETCH_ALBUM_PHOTO;

    constructor(public payload: Photo[]) { }
}

export class ToggleFavourite implements Action {
    type = ActionTypes.TOGGLE_FAVOURITE;

    constructor(public payload: Album[]) { }
}

export type Actions
    = LoadAction | FetchAlbumPhotoAction | ToggleFavourite;