import * as postsActions from '../actions/posts';

export const loadingPostsReducer = (state: any = false, {type}) => {
    switch(type) {
        case postsActions.ActionTypes.FETCH_IN_PROGRESS: {
            return true;
        }

        case postsActions.ActionTypes.FETCH: {
            return false;
        }

        default: {
            return state;
        }
    }
}

export const postsReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case postsActions.ActionTypes.FETCH: {
            return payload;
        }

        case postsActions.ActionTypes.LOAD_AUTHOR: {
            let newState = state.map(post => {
                let postAuthor = payload.find(user => user.id == post.userId);
                return Object.assign({}, post, { author: postAuthor.username });
            });
            return newState;
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

        case postsActions.ActionTypes.LOAD_AUTHOR: {
            let newState = state.map(post => {
                let postAuthor = payload.find(user => user.id == post.userId);
                return Object.assign({}, post, { author: postAuthor.username });
            });
            return newState;
        }
        
        default: {
            return state;
        }
    }
}

export const postCommentsReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case postsActions.ActionTypes.FETCH_POST_COMMENTS: {
            return payload;
        }

        default: {
            return state;
        }
    }
}