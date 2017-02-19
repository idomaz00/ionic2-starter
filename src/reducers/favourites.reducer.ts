import * as favouritesActions from '../actions/favourites.action';

export const favouritesReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case favouritesActions.ActionTypes.FETCH_FAVOURITES: {
            console.log('prvi fav red',state);
            console.log('drugi fav red',payload);
            return payload;
        }

        case favouritesActions.ActionTypes.ADD_FAVOURITE: {
            return state;
        }

        case favouritesActions.ActionTypes.REMOVE_FAVOURITE: {
            return state;
        }

        default: {
            return state;
        }
    }
}