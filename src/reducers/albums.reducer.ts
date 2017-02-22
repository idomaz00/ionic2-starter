import * as albumsActions from '../actions/albums.action';
import * as favouritesActions from '../actions/favourites.action';
import * as postsActions from '../actions/posts.actions';

export const albumsReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case albumsActions.ActionTypes.LOAD: {
            let albumList = payload.map(album => Object.assign({}, album, {isFavourite: false}));
            return albumList;
        }

        case postsActions.ActionTypes.LOAD_AUTHOR: {
            let albumList = state.map(album => {
                let albumAuthor = payload.find(user => user.id == album.userId);
                return Object.assign({}, album, { author: albumAuthor.username });
            });
            return albumList;
        }
        case favouritesActions.ActionTypes.ADD_FAVOURITE:
        case favouritesActions.ActionTypes.REMOVE_FAVOURITE:{
            let albumList = state.map((album, index) => {
                        if (index+1 === payload) {
                            return Object.assign({}, album, {
                                isFavourite: !album.isFavourite
                            })
                        }
                        return album;
                    })
            return albumList;
        }

        default: {
            return state;
        }
    }
}

export const albumPhotoReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case albumsActions.ActionTypes.FETCH_ALBUM_PHOTO: {
            return payload;
        }

        default: {
            return state;
        }
    }
}