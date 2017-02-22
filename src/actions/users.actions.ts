import { Action } from '@ngrx/store';
import { User } from '../models/user';
import { type } from '../util';

export const ActionTypes = {
    FETCH:              type('[User] Fetch')
};

export class FetchAction implements Action {
    type = ActionTypes.FETCH;

    constructor(public payload: User[]) { }
}

export type Actions
    = FetchAction;