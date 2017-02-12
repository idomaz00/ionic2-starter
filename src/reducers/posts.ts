import { Post } from '../models/post';
import * as postsActions from '../actions/posts';

export const postsReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case postsActions.ActionTypes.FETCH: {
            return payload;
        }

        default: {
            return state;
        }
    }
}