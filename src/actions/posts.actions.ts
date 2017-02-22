import { Action } from '@ngrx/store';
import { Post } from '../models/post';
import { type } from '../util';

export const ActionTypes = {
    FETCH_IN_PROGRESS:  type('[Post] Fetch In Progress'),
    FETCH:              type('[Post] Fetch'),
    LOAD_LANDING:       type('[Post] Load Landing'),
    FETCH_POST_COMMENTS:type('[Post] Fetch Post Comments'),
    LOAD_AUTHOR:        type('[Post] Load Post Author')
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

export class FetchPostCommentsAction implements Action {
    type = ActionTypes.FETCH_POST_COMMENTS;

    constructor() {}
}


export class LoadPostUserAction implements Action {
    type = ActionTypes.LOAD_AUTHOR;

    constructor() {}
}


export type Actions
    = FetchInProgressAction
    | FetchAction
    | LoadLandingAction
    | FetchPostCommentsAction
    | LoadPostUserAction;
