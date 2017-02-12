import { Action } from '@ngrx/store';
import { Post } from '../models/post';
import { type } from '../util';

export const ActionTypes = {
    FETCH:          type('[Post] Fetch')
};

export class FetchAction implements Action {
    type = ActionTypes.FETCH;

    constructor() { }
}

export type Actions
    = FetchAction;