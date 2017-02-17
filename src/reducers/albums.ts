import * as albumsActions from '../actions/albums';

export const albumsReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case albumsActions.ActionTypes.LOAD: {
            let albumList = payload.map(album => Object.assign({}, album, {isFavourite: false}));
            let albumLis2t = payload.map(album => album.favorite = false);                           
            return albumList;
        }

        case albumsActions.ActionTypes.ADD_FAVOURITE: {
            let list = state.map((album, index) => {
                        if (index+1 === payload) {
                            return Object.assign({}, album, {
                                isFavourite: !album.isFavourite
                            })
                        }
                        return album;
                    })

            return list;
        }

        default: {
            return state;
        }
    }
}

export const addFavouritesReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        // case albumsActions.ActionTypes.ADD_FAVOURITE: {
        //     const album = payload;
        //     console.log(payload);
        //     return payload;
        // }

        default: {
            return state;
        }
    }
}