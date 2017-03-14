// import * as albumsActions from '../actions/albums.action';
// import * as postsActions from '../actions/posts.actions';

// export const albumsReducer = (state: any = [], {type, payload}) => {
//     switch(type) {
//         case albumsActions.ActionTypes.LOAD: {
//             let albumList = payload.map(album => Object.assign({}, album, {isFavourite: false}));
//             return albumList;
//         }

//         case postsActions.ActionTypes.LOAD_AUTHOR: {
//             let albumList = state.map(album => {
//                 let albumAuthor = payload.find(user => user.id == album.userId);
//                 return Object.assign({}, album, { author: albumAuthor.username });
//             });
//             return albumList;
//         }
//         case albumsActions.ActionTypes.TOGGLE_FAVOURITE:{
//             console.log("u favoritima");
//             let albumList = state.map((album, index) => {
//                         if (index+1 === payload) {
//                             return Object.assign({}, album, {
//                                 isFavourite: !album.isFavourite
//                             })
//                         }
//                         return album;
//                     })
//             return albumList;
//         }

//         default: {
//             return state;
//         }
//     }
// }

// export const albumPhotoReducer = (state: any = [], {type, payload}) => {
//     switch(type) {
//         case albumsActions.ActionTypes.FETCH_ALBUM_PHOTO: {
//             return payload;
//         }

//         default: {
//             return state;
//         }
//     }
// }
import { Album } from '../models/album';
import * as album from '../actions/albums.action';

export interface State {
    loaded: boolean;
    loading: boolean;
    albums: Album[];
};

const initialState: State = {
    loaded: false,
    loading: false,
    albums: []
};

export function reducer(state = initialState, action: album.Actions): State {
    switch(action.type) {
        case album.ActionTypes.LOAD: {
            return Object.assign({}, state, {
                loading: true
            });
        }

        case album.ActionTypes.LOAD_SUCCESS: {
            const newAlbums = action.payload;

            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                albums: [...state.albums, ...newAlbums]

            });
        }

        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getAlbums = (state: State) => state.albums;