import { ActionReducer, combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';

import * as fromPosts from './posts';

export interface State {
    posts: fromPosts.State;
};

const reducers = {
    posts: fromPosts.reducer
};

const developmentReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return developmentReducer(state, action);
}

export const getPostsState = (state: State) => state.posts;