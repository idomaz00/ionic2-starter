import { Action } from '@ngrx/store';
import { Post } from '../models/post';
import { type } from '../util';

export const ActionTypes = {
    FETCH_IN_PROGRESS:  type('[Post] Fetch In Progress'),
    FETCH:              type('[Post] Fetch'),
    LOAD_LANDING:       type('[Post] Load Landing')
};

export class FetchInProgressAction implements Action {
    type = ActionTypes.FETCH_IN_PROGRESS;

    constructor() {}
}

export class FetchAction implements Action {
    type = ActionTypes.FETCH;

    constructor(public payload: Post[]) { }
}

export class LoadLandingAction implements Action {
    type = ActionTypes.LOAD_LANDING;

    constructor(public payload: Post[]) {}
}

export type Actions
    = FetchInProgressAction
    | FetchAction
    | LoadLandingAction;
