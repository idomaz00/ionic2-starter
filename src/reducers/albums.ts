import * as albumsActions from '../actions/albums';

export const albumsReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case albumsActions.ActionTypes.LOAD: {
            let albumList = payload.map(album => Object.assign({}, album, {
                                                    isFavourite: false
                                                })
                                         );
            console.log(albumList);                             
            return albumList;
        }

        default: {
            return state;
        }
    }
}

export const addFavouritesReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case albumsActions.ActionTypes.ADD_FAVOURITE: {
            return payload;
        }

        default: {
            return state;
        }
    }
}