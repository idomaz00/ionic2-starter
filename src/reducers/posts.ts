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

export const landingPostsReducer = (state: any = [], {type, payload}) => {
    switch(type){
        case postsActions.ActionTypes.LOAD_LANDING: {
            return payload;
        }
        
        default: {
            return state;
        }
    }
}