import * as albumsActions from '../actions/albums';

export const albumsReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case albumsActions.ActionTypes.LOAD: {
            return payload;
        }

        default: {
            return state;
        }
    }
}