// import * as favouritesActions from '../actions/favourites.action';

// export const favouritesReducer = (state: any = [], {type, payload}) => {
//     switch(type) {
//         case favouritesActions.ActionTypes.FETCH_FAVOURITES: {
//             return payload;
//         }

//         case favouritesActions.ActionTypes.ADD_FAVOURITE: {
//             console.log("u fav red");
//             payload.isFavourite = true;
//             return [...state, payload];
//         }

//         case favouritesActions.ActionTypes.REMOVE_FAVOURITE: {
//             console.log("u fav red");
//             payload.isFavourite = false;
//             return state.filter(favourite => favourite.id != payload.id);
//         }

//         default: {
//             return state;
//         }
//     }
// }