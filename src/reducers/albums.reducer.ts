import * as albumsActions from '../actions/albums';

export const albumsReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case albumsActions.ActionTypes.LOAD: {
            let albumList = payload.map(album => Object.assign({}, album, {isFavourite: false}));
            return albumList;
        }

        case albumsActions.ActionTypes.TOGGLE_FAVOURITE: {
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