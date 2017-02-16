import * as usersActions from '../actions/users';

export const usersReducer = (state: any = [], {type, payload}) => {
    switch(type) {
        case usersActions.ActionTypes.FETCH: {
            return payload;
        }

        default: {
            return state;
        }
    }
}