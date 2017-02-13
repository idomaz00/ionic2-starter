import { Post } from '../models/post';
import * as posts from '../actions/posts';

export interface State {
    loaded: boolean;
    loading: boolean;
    posts: Post[];
};

const initialState: State = {
    loaded: false,
    loading: false,
    posts: []
};

export function reducer(state = initialState, action: posts.Actions): State {
    switch(action.type) {
        case posts.ActionTypes.FETCH: {
            return Object.assign({}, state, {
                loading: true
            });
        }

        case posts.ActionTypes.FETCH_SUCCESS: {
            const newPosts = action.payload;
            
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                posts: [...state.posts, ...newPosts]
            });
        }

        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getPosts = (state: State) => state.posts;